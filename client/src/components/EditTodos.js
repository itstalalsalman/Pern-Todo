import React, { Fragment, useState } from 'react'

const EditTodos = ({todo}) => {
    const [description, setDescription] = useState(todo.description);

    //edit description
    const updateDescription = async (e) => {
        e.preventDefault();

        try {
            const body = { description };
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
                method: "PUT",
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(body)
            })

            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }

  return (
    <Fragment>
        <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>Edit</button>

        <div id={`id${todo.todo_id}`} className="modal fade" role="dialog" onClick={e => updateDescription(e)}>
            <div className="modal-dialog">

                <div className="modal-content">
                    <div className='container py-3' style={{display: "flex", justifyContent: "space-between", alignItems: 'center', borderBottom: '1px solid rgba(104, 111, 108, 0.15)'}}>
                        <button type="button" className="close" data-dismiss="modal" onClick={() => setDescription(todo.description)}>&times;</button>
                        <h4 className="modal-title">Edit Todo</h4>
                    </div>
                    <div className="modal-body">
                        <input type='text' className='form-control' value={description} onChange={e => setDescription(e.target.value)}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-warning" data-dismiss="modal" onClick={e => updateDescription(e)}>
                            Edit
                        </button>
                        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={e => updateDescription(e)}>
                            Close
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </Fragment>
  )
}

export default EditTodos