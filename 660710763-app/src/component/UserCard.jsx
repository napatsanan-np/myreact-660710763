import React from 'react';
import pong from '../mypic2.png';

const Avatar = () => (
    <img
        src={pong}
        alt="User Avatar"
        style={{
            borderRadius: '100%',
            width: '60px',
            height: '60px',
            objectFit: 'cover',
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#789DBC', margin: '5px 0' }}>
        Napatsanan Deesamer
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#789DBC', fontSize: '15px' }}>
        660710763 <br />
        คณะ วิทยาศาสตร์ <br />
        สาขา เทคโนโลยีสารสนเทศ
    </p>
);


const UserCard = () => {
    return (
        <div style={{
            padding: '40px',
            borderRadius: '12px',
            textAlign: 'center ',
            backgroundColor: '#FEF9F2',
            width: '275px',
            height: '280px',
            boxShadow: '0 5px 12px rgba(0, 0, 0, 0.9)',
            margin: '45px auto'

        }}>
            <div
                style={{
                    position: "absolute",
                    top: "35px",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            >
                <Avatar />
            </div>
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;