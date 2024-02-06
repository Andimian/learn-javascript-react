import { Button } from "../button/component.tsx";
import { useContext, useState } from "react";
import { UserAuthContext } from "../../contexts/authContext.tsx";

export const AuthForm = ({onLogin} : { onLogin: () => void }) => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const {setUser} = useContext(UserAuthContext);
    return (
        <div>
            <input
                type="text"
                value={userName}
                onChange={(event) => {
                    setUserName(event.target.value);
                    console.log(userName);
                }}
            />
            <input
                type="text"
                value={userEmail}
                onChange={(event) => setUserEmail(event.target.value)}
            />
            <Button title={"Войти"} onClick={() => {
                setUser({name: userName, email: userEmail});
                onLogin();
            }}/>
            <Button title={"Отмена"} onClick={() => {
                setUser(null);
            }}/>
        </div>
    );
};