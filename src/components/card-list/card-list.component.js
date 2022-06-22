import React, { Component } from "react";

class CardList extends Component {
    render() {
        const { users } = this.props
        // console.log(users)
        return (
            <div className="d-flex flex-wrap gap-5 mx-5 my-5">
                {users.map(user =>
                    <div className="card w-25 gap-2 px-2 bg-light">
                        {/* <img className="" src={`https://robohash.org/${user.id}?set=set2`} alt={user.username} height='50' width='50' /> */}
                        <div className="">
                            <h3 key={user.author} >{user.name}</h3>
                            {/* <p key={user.id}>{user.email}</p> */}
                        </div>
                    </div>
                )
                }
            </div>
        )
    }
}

export default CardList