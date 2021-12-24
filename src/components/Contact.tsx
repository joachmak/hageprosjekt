import React from "react";
import {Heading, Text} from "@chakra-ui/react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMobileAlt, faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    let styles = {
        heading: {
            marginBottom: 15,
            color: "#555",
        },
        icon: {
            marginRight: 10,
            transform: "scale(1.3)",
        },
        text: {
            marginBottom: 10,
        },
        bottom: {
            height: 50,
        },
        link: {
            color: "rgb(0,150,0)",
        },
        map: {
            display: "flex",
            justifyContent: "center",
        }
    }
    let email = "info@hageprosjekt.no"
    let phone = "(+47) 412 51 822"
    let address = "Bjørnsvelia 25, 2819 Gjøvik, Norge"
    return (
        <>
            <Heading style={styles.heading} align="center">
                Kontakt oss
            </Heading>
            <Text align="center" style={styles.text}>
                <FontAwesomeIcon style={styles.icon} icon={faMobileAlt}/>
                Mobil: <a style={styles.link} href="tel:004741251822">{phone}</a>
            </Text>
            <Text align="center" style={styles.text}>
                <FontAwesomeIcon style={styles.icon} icon={faEnvelope}/>
                E-post: <a style={styles.link} href={"mailto:" + email}>{email}</a>
            </Text>
            <Text align="center" style={styles.text}>
                <FontAwesomeIcon style={styles.icon} icon={faMapMarkerAlt}/>
                {address}
            </Text>
            <div style={styles.map}>
                <iframe
                    title="Google maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1945.6229167923086!2d10.667349516237635!3d60.813957598146494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4641d9f933b62cb7%3A0x9e51d7079356b003!2sBj%C3%B8rnsvelia%2025%2C%202819%20Gj%C3%B8vik!5e0!3m2!1sno!2sno!4v1640353605265!5m2!1sno!2sno"
                    /* @ts-ignore */
                    width="400" height="300" allowFullScreen="" />
            </div>
            <div style={styles.bottom}/>
        </>
    )
}