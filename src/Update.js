

function Update({update, onHandleDeleteUpdate}) {

    function handleUpdateDelete() {
        onHandleDeleteUpdate(update)
    }

    return (
        <div className="single-comment">
            <div>
                {update.comment}
            </div>
            <button onClick={handleUpdateDelete} className="delete-update">x</button>
        </div>
    )
}

export default Update