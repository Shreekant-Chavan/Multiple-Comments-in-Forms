import { useState } from "react";

export default function Comments() {

    let [formData, setFormData] = useState({
        username : "",
        remarks : "",
        rating : 5,
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name] : event.target.value}
        });
    }

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username : "",
            remarks : "",
            rating : 5,
        });
    }

    return (
        <div>
            <h4>Give a Comment</h4>
            <form onSubmit={handleSubmit} action="action.php">
                <label htmlFor="username">Username</label>
                <input type="text" value={formData.username} placeholder="username" name="username" id="username" onChange={handleInputChange}/>
                <br /><br />
                <label htmlFor="remarks">Remarks</label>
                <textarea type="text" value={formData.remarks} placeholder="Add few remarks" name="remarks" id="remarks" onChange={handleInputChange} ></textarea>
                <br /><br />
                <label htmlFor="rating">Rating</label>
                <input type="number" value={formData.rating} min={1} max={5} name="rating" id="rating" onChange={handleInputChange} />
                <br /><br />
                <button>Add Comment</button>
            </form>
        </div>
    );
}