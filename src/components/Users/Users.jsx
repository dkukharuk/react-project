import React from "react";
import styles from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([

            {
                id: 1,
                photoUrl: 'https://www.biography.com/.image/t_share/MTE4MDAzNDEwNDA1MzI4Mzk4/anna-kendrick-546534-1-402.jpg',
                followed: false,
                fullName: 'Anna',
                status: 'I am a accountant',
                location: {city: 'Kyiv', country: 'Ukraine'}
            },
            {
                id: 2,
                photoUrl: 'https://assets.unenvironment.org/s3fs-public/styles/ex/public/people/2017-10/Andrew.jpg?itok=aHAUqcpL',
                followed: true,
                fullName: 'Andrew',
                status: 'I am a driver',
                location: {city: 'New-York', country: 'USA'}
            },
            {
                id: 3,
                photoUrl: 'https://m.media-amazon.com/images/M/MV5BMTQxNTUzNTU0MV5BMl5BanBnXkFtZTcwNTY2NDY5OQ@@._V1_SY1000_SX800_AL_.jpg',
                followed: false,
                fullName: 'Marek',
                status: 'I am a pilot',
                location: {city: 'Gdansk', country: 'Poland'}
            },

        ]);
    }


    return (
        <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <img src={user.photoUrl} alt={user.fullName} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(user.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span><span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </div>)
            }
        </div>
    )
};

export default Users;
