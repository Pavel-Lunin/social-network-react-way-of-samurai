import React, { useState } from "react";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);

  const activateEditMode = () => {
    setEditMode(true);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || "----"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input autoFocus={true} />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
