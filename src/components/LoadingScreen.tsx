import {useState} from "react";

export default function LoadingScreen() {
    let [displayOverlay, setDisplayOverlay] = useState(false)
    setTimeout(() => {
        setDisplayOverlay(true);
    }, 3500);
    let styles = {
        container: {
            backgroundColor: "white",
            width: "100vw",
            height: "100vh",
            zIndex: 150,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 50,
        },
        innerContainer: {
            width: "180px",
        },
        outerContainer: {
            display: "flex",
            flexDirection: "column",
        },
        text: {
            color: "white",
        },
    }
    return (
        <div className={"positionFixed" + (displayOverlay ? " opacity0" : "")} style={styles.container}>
            <svg style={styles.innerContainer} className="animated-icon pencil" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525 525">
                <path
                    d="M333.16,51v51.13a9.43,9.43,0,0,1-9.43,9.43H200.62a9.42,9.42,0,0,1-9.42-9.43V51a37.73,37.73,0,0,1,37.65-37.65H295.5A37.59,37.59,0,0,1,333.16,51Zm-142,95V437.27l55.62,79.13a18.84,18.84,0,0,0,30.83,0l55.56-79.18V146a9.41,9.41,0,0,0-9.43-9.42H200.68A9.51,9.51,0,0,0,191.2,146ZM235.56,368a10.93,10.93,0,0,1-11-11V186.19a11,11,0,0,1,22,0V357a10.93,10.93,0,0,1-11,11Zm26.62,66.65L288.79,408l20.13,20.13-29.5,42H244.93l-29.5-42L235.56,408Z"/>
            </svg>
            <svg style={styles.innerContainer} className="animated-icon seedling" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525 525">
                <path
                    d="M70.2,140.41H6.2c0,123.7,100.3,224,224,224v144a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16v-144C294.2,240.71,193.9,140.41,70.2,140.41Zm384-64c-84.2,0-157.4,46.5-195.7,115.2a256.38,256.38,0,0,1,59,107.6c112.7-11.7,200.7-106.9,200.7-222.8Z"/>
            </svg>
            <svg style={styles.innerContainer} className="animated-icon hammer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 525 525">
                <path
                    d="M406.8,28.78H380.5a13.14,13.14,0,0,0-13.14,13.15V55.07H333.78a52.37,52.37,0,0,0-45.29-26.3H235.91A131.46,131.46,0,0,0,104.46,160.23l78.87-26.29,10.89,10.89a52.52,52.52,0,0,0,37.18,15.39h57.1a52.37,52.37,0,0,0,45.29-26.29h33.57v13.14a13.15,13.15,0,0,0,13.15,13.15H406.8A13.15,13.15,0,0,0,420,147.07V41.91A13.15,13.15,0,0,0,406.8,28.78ZM231.4,186.52a80.56,80.56,0,0,1-12.66-1.22L208.9,471.86a50.8,50.8,0,1,0,101.55,0l-9.84-286.52a79.87,79.87,0,0,1-12.11,1.18Z"/>
            </svg>
        </div>
    )
}