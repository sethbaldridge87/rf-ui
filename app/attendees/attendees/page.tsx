import Image from "next/image"
import PersonPortal from "@/public/person-portal.png"
import styles from "./attendees.module.scss"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attendees",
};

export default function Attendees() {
    return (
        <section className={styles.section}>
            <h2>Event setup guide</h2>
            <p className={styles.description}>See the available list of modules below. We suggest that you start with the attendee module.</p>
            <hr />
            <div className={styles.subHeader}>
                <Image src={PersonPortal} alt="Person Portal" width={35} height={35} />
                <h3>Attendee</h3>
            </div>
            <h4><strong>Step 1: </strong>Base settings.</h4>
            <div className={styles.stepBox}>
                <div>
                    <h5>General</h5>
                    <p>Define Attendee types & attributes</p>
                </div>
                <div>
                    <h5>Title</h5>
                    <p>Description that explains the value goes here. Description that explains the value goes here. </p>
                </div>
                <div>
                    <h5>Title</h5>
                    <p>Description that explains the value goes here. Description that explains the value goes here. </p>
                </div>
            </div>
            <h4><strong>Step 2: </strong>Build registration workflows.</h4>
            <div className={styles.multiStepBox}>
                <div tabIndex={0}>
                    <h5>Attendee Registration</h5>
                    <p>Start by creating a general registration workflow</p>
                </div>
                <div tabIndex={0}>
                    <h5>Attendee Registration</h5>
                    <p>Start by creating a general registration workflow</p>
                </div>
                <div tabIndex={0}>
                    <h5>Attendee Registration</h5>
                    <p>Start by creating a general registration workflow</p>
                </div>
                <div className={styles.addWorkflow} tabIndex={0}>
                    <p>Add Registration Workflow </p>
                </div>
            </div>
            <h4><strong>Step 3: </strong>Design post-registration experiences.</h4>
            <div className={`${styles.multiStepBox} ${styles.alt}`} >
                <div tabIndex={0}>
                    <h5>Attendee Portal</h5>
                    <p>Manage the portal that attendees will see after they`ve registered for your event.</p>
                </div>
            </div>
        </section>
    )
}