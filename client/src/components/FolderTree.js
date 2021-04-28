import React, { useState } from "react";
import { connect } from "react-redux";
import {
  updateFolderRequest,
  deleteFolderRequest,
} from "../state/Folder/thunks";
import { Tree } from "antd";
import "antd/dist/antd.css";

const FolderTree = ({ folderList, updateFolder, deleteFolder }) => {
  const [showLine, setShowLine] = useState(true);
  const [showIcon, setShowIcon] = useState(false);

  let data = folderList;

  const onSelect = (keys, info) => {
    console.log("Trigger Select", keys, info);
    let folder = {
      _id: info.node._id,
    };
    updateFolder({ ...folder });
  };

  const onDragEnter = (info) => {
    console.log(info);
  };

  const onDrop = (info) => {
    console.log(info);
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split("-");
    const dropPosition =
      info.dropPosition - Number(dropPos[dropPos.length - 1]);

    const loop = (data, key, callback) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
        if (data[i].children) {
          loop(data[i].children, key, callback);
        }
      }
    };

    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    if (!info.dropToGap) {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        item.children.unshift(dragObj);
      });
      console.log(info.node);
      let folder = {
        _id: info.node._id,
        title: info.node.title,
        key: info.node.key,
        userId: info.node.userId,
        selected: info.node.selected,
        children: {
          _id: info.dragNode._id,
          title: info.dragNode.title,
          key: info.dragNode.key,
          userId: info.dragNode.userId,
          selected: info.dragNode.selected,
          children: [],
        },
      };
      updateFolder({ ...folder });
      deleteFolder(info.dragNode._id);
    } else if (
      (info.node.props.children || []).length > 0 &&
      info.node.props.expanded &&
      dropPosition === 1
    ) {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        item.children.unshift(dragObj);
      });
    } else {
      let ar;
      let i;
      loop(data, dropKey, (item, index, arr) => {
        ar = arr;
        i = index;
      });
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj);
      } else {
        ar.splice(i + 1, 0, dragObj);
      }
    }
  };

  return folderList.length > 0 ? (
    <div>
      <Tree
        className="draggable-tree"
        draggable
        blockNode
        showLine={showLine}
        showIcon={showIcon}
        onDragEnter={onDragEnter}
        onDrop={onDrop}
        onSelect={onSelect}
        treeData={data}
      />
    </div>
  ) : (
    <div>No folders</div>
  );
};

const mapStateToProps = (state) => ({
  folder: state.folder,
  folderList: state.folderList,
});

const mapDispatchToProps = (dispatch) => ({
  updateFolder: (folder) => dispatch(updateFolderRequest(folder)),
  deleteFolder: (folder) => dispatch(deleteFolderRequest(folder)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FolderTree);
