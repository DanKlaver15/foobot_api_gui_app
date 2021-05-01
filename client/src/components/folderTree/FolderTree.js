import React, { useState } from "react";
import { connect } from "react-redux";
import {
  deleteFolderRequest,
  updateFolderRequest,
} from "../../state/Folder/thunks";
import { Tree } from "antd";
import "antd/dist/antd.css";
import "./folderTree.css";

const FolderTree = ({ folderList, updateFolder, user }) => {
  const treeColor = () => {
    if (!user.darkMode) {
      return "lightModeTree";
    } else {
      return "darkModeTree";
    }
  };

  const reformatData = () => {
    console.log("REFORMATING THE DATA FOR THE TREE");
    let rawData = folderList.map((folder) => {
      let obj = {
        ...folder,
        key: folder._id,
      };
      delete obj._id;
      return obj;
    });

    const idMapping = rawData.reduce((acc, el, i) => {
      acc[el.key] = i;
      return acc;
    }, {});

    let data = [];
    rawData.forEach((el) => {
      // Handle the root element
      if (el.parentId === null) {
        data.push(el);
        return;
      }
      // Use our mapping to locate the parent element in our data array
      const parentEl = rawData[idMapping[el.parentId]];
      // Add our current el to its parent's `children` array
      parentEl.children = [...(parentEl.children || []), el];
    });
    return data;
  };

  let data = reformatData();

  console.log("DATA: ", data);

  const onSelect = (keys, info) => {
    console.log("Trigger Select", keys, info);
    let folder = {
      _id: info.node.key,
    };
    updateFolder({ ...folder });
  };

  const onDragEnter = (info) => {
    console.log(info);
  };

  const onDrop = (info) => {
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
      console.log("New parent folder: ", info.node);
      console.log("Folder that was dragged: ", info.dragNode);
      let folder = {
        title: info.dragNode.title,
        _id: info.dragNode.key,
        parentId: info.node.key,
        userId: info.dragNode.userId,
        selected: info.dragNode.selected,
      };
      updateFolder({ ...folder });
      data = reformatData();
    } else if (
      (info.node.props.children || []).length > 0 &&
      info.node.props.expanded &&
      dropPosition === 1
    ) {
      loop(data, dropKey, (item) => {
        item.children = item.children || [];
        item.children.unshift(dragObj);
        data = reformatData();
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
      data = reformatData();
    }
  };

  return folderList.length > 0 ? (
    <div id={treeColor()}>
      <Tree
        className="hide-file-icon"
        draggable
        blockNode
        showLine
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
  user: state.user,
  folderList: state.folderList,
});

const mapDispatchToProps = (dispatch) => ({
  updateFolder: (folder) => dispatch(updateFolderRequest(folder)),
  deleteFolder: (folder) => dispatch(deleteFolderRequest(folder)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FolderTree);
