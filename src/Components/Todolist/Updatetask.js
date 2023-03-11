import React from 'react'

const Updatetask = ({updateData, changeTask, updateTask, cancleUpdate}) => {
  return (
    <>
          <div className="row">
            <div className="col">
              <input
                value={updateData && updateData.title}
                onChange={(e) => changeTask(e)}
                className="form-control form-control-lg"
              />
            </div>
            <div onClick={updateTask} className="col-auto">
              <button className="btn btn-lg btn-info btn_margin">
                Update
              </button>
              <button onClick={cancleUpdate} className="btn btn-lg btn-warning">
                Cancle
              </button>
            </div>
          </div>
          <br />
        </>
  )
}

export default Updatetask