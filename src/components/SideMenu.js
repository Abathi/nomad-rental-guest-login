import Button from '../components/Button'
import user from '../assets/images/user.png';
import faq from '../assets/images/faq.png';
import contact from '../assets/images/contact.png';
import account from '../assets/images/account.png';
import refer from '../assets/images/refer.png';
import toggle from '../assets/images/toggle.png';

const SideMenu = () => {
    return (
        <div>
            <img src={user} alt=""></img>
            <div>John Doe</div>
            <div>Premium Nomad</div>
            <Button
                style={{ color: '#168EEA' }}
                classes={'btn btn-primary w-100'}
                text={'Booking'}
            />
            <div><img src={refer} alt=""></img>Refer and Earn</div>
            <div><img src={account} alt=""></img>Account Settings</div>
            <div>Support</div>
            <div><img src={contact} alt=""></img>Contact us</div>
            <div><img src={faq} alt=""></img>FAQ</div>
            <div><img src={toggle} alt="" width="10%"></img>Sign out</div>
        </div>
    )
}

export default SideMenu
