import './Header.css'
import ReceiptIcon from '@material-ui/icons/Receipt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    return (
        <div className="header">
            <div className="payoption__container">
                <div className="payoption__container1">
                    <ReceiptIcon/>
                </div>
                <div className="payoption__container2">
                   <p>USD</p> 
                </div>
                <div className="payoption__container3">
                    <ExpandMoreIcon/>
                </div>
                
            </div>  
        </div>
    )
}

export default Header
