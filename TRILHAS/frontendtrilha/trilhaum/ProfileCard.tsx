import React from 'react';
import styles from './ProfileCard.module.css';

interface ProfileCardProps {
    name: string;
    description: string;
    image: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, description, image }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={name} className={styles.image} />
            <h2 className={styles.name}>{name}</h2>
            <p className={styles.description}>{description}</p>
        </div>
    );
};

export default ProfileCard;