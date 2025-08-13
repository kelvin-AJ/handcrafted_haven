"use client"


import {useActionState} from "react"
import styles from "../ui-components.module.css";
import { updateUser } from "@/app/lib/actions";
import {EditFormState} from "@/app/lib/definitions";
import { IUser } from "@/app/lib/model/userModel";

export default function EditProfileForm({user} : {user: IUser}) {

    const initialState: EditFormState = {
        message: "", 
        errors: {
            name: "",
            email: "",
            role: "",
            bio: "",
            title: "",
        }
    }
    const [state, formAction] = useActionState(updateUser, initialState);


    return (
        <form action={formAction} className={styles.form}>
            <div className={styles.group}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Enter Full Name" defaultValue={user.name}/>
                {state.errors?.name && (
                    <p style={{ color: 'red' }}>{state.errors.name}</p>
                )}
            </div>
            <div className={styles.group}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" placeholder="Enter Title" defaultValue={user.title} />
                {state.errors?.title && (
                    <p style={{ color: 'red' }}>{state.errors.title}</p>)}
            </div>
            <div className={styles.group}>
                <label htmlFor="bio">About</label>
                <textarea id="bio" name="bio" placeholder="Enter Bio"  defaultValue={user.bio}></textarea>
                {state.errors?.bio && (
                    <p style={{ color: 'red' }}>{state.errors.bio}</p>)}

            </div>
            <div className={styles.group}>
                <label htmlFor="role">Role</label>
                <select id="role" name="role"  defaultValue={user.role}>
                    <option defaultValue="user">User</option>
                    <option defaultValue="seller">Seller</option>
                </select>
                {state.errors?.role && (
                    <p style={{ color: 'red' }}>{state.errors.role}</p>)}
            </div>
            <button type="submit" className={styles.submitButton}>Submit</button>
            {state.message && <p style={{ color: 'green' }}>{state.message}</p>}
        </form>
    )
}