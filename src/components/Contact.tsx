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
                <FontAwesomeIcon style={styles.icon} icon={faMapMarkerAlt}/>
                {address}
            </Text>
            <Text align="center" style={styles.text}>
                <FontAwesomeIcon style={styles.icon} icon={faMobileAlt}/>
                Mobil: <a style={styles.link} href="tel:004741251822">{phone}</a>
            </Text>
            <Text align="center" style={styles.text}>
                <FontAwesomeIcon style={styles.icon} icon={faEnvelope}/>
                E-post: <a style={styles.link}  href={"mailto:" + email}>{email}</a>
            </Text>
            <div style={styles.bottom}/>
        </>
    )
}