import { Redirect } from 'react-router-dom';

function Home() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return (
        
        <div className="text-center vh65 card-center">
            {!user ?
                <Redirect to="/login" />
                :
                <></>
            }
        </div>
    );
}
export default Home;
