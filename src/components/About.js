import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <p>
                Welcome to our restaurant! We are dedicated to providing you with the best dining experience possible. Our team is passionate about food and service, and we strive to create a warm and inviting atmosphere for all our guests.
            </p>
            <UserClass name="Shubham (class)" loc="Kota (class)"/>
        </div>
    )
}

export default About