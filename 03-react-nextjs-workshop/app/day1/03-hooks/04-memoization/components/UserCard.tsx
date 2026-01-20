"use client";

import { memo, useRef } from "react";
import styles from "./memo.module.scss";

interface User {
    name: string;
    email: string;
    lastSeen: Date;
}

interface UserCardProps {
    user: User;
}

function UserCardComponent({ user }: UserCardProps) {
    const renderCount = useRef(0);
    renderCount.current += 1;

    return (
        <div className={styles.card}>
            <h3>
                👤 User Card <span className={styles.renderCount}>{renderCount.current}</span>
            </h3>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p className={styles.muted}>
                Last Seen: {user.lastSeen.toLocaleTimeString()}
            </p>
            <div className={styles.note}>
                (Sadece name veya email değişirse render olur, lastSeen değişimini umursamaz)
            </div>
        </div>
    );
}

// 2. Parametre: arePropsEqual
// true dönerse: props EŞİT demek -> RENDER ETME
// false dönerse: props FARKLI demek -> RENDER ET
export const UserCard = memo(UserCardComponent, (prevProps, nextProps) => {
    // Sadece name ve email değiştiğinde render olsun istiyoruz
    // lastSeen değişse bile render OLMASIN
    return (
        prevProps.user.name === nextProps.user.name &&
        prevProps.user.email === nextProps.user.email
    );
});
