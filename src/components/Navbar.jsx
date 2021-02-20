import React,{useState} from 'react'
import InfoModal from './InfoModal'

const Navbar = () => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className="navbar">
            {showInfo && <InfoModal />}
            <h1>Api Call</h1>
            <ul>
                <li onClick={() => setShowInfo(true)}>Company Info</li>
            </ul>
        </div>
    )
}

export default Navbar
