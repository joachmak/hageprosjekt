import React, {useContext, useState} from "react";
import {Button, Grid, GridItem, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Text, Textarea, Tooltip} from "@chakra-ui/react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {sizeContext} from "../App";
import {faMobileAlt, faEnvelope, faMapMarkerAlt, faAngleRight, IconDefinition} from '@fortawesome/free-solid-svg-icons'
import { CheckIcon, EmailIcon, WarningTwoIcon } from "@chakra-ui/icons";


function InputElement(props: {inputText: string, icon: IconDefinition, validFunc: (text: string) => boolean, tooltip: string, name: string}) {
    let [input, setInput] = useState("")
    let [valid, setValid] = useState(false)
    return (
        <>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    color='gray.500'
                    fontSize='1.2em'
                    children={<FontAwesomeIcon icon={props.icon}/>}
                />
                <Input name={props.name} placeholder={props.inputText} text={input} onChange={(e) => {
                    setInput(e.target.value)
                    setValid(props.validFunc(e.target.value))
                }} />
                <InputRightElement
                    children={
                        valid ?
                            <CheckIcon color='green.500' /> :
                            <Tooltip label={props.tooltip}>
                                <WarningTwoIcon color='yellow.500' />
                            </Tooltip>
                    }
                />
            </InputGroup>
        </>
    )
}

export default function Contact() {
    let styles = {
        container: {
        },
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
        },
        stack: {
            padding: "0 10px",
        }
    }
    const size = useContext(sizeContext)
    let cols = size.lg ? 6 : 2;
    let email = "info@hageprosjekt.no"
    let phone = "(+47) 412 51 822"
    let address = "Bjørnsvelia 25, 2819 Gjøvik, Norge"
    const [validEmail, setValidEmail] = useState(false)
    const [validPhone, setValidPhone] = useState(false)
    const [validSubject, setValidSubject] = useState(false)

    let validatePhone = (text: string) => {
        let isValid = text.length >= 8
        setValidPhone(isValid)
        return isValid
    }
    let validateSubject = (text: string) => {
        let isValid = text.length >= 5
        setValidSubject(isValid)
        return isValid
    }
    let validateEmail = (email: string) => {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let isValid = re.test(email)
        setValidEmail(isValid)
        return isValid
    }

    return (
        <>
            <Heading style={styles.heading} align="center">
                Kontakt oss
            </Heading>
            <Grid templateColumns={'repeat(' + cols + ', 1fr)'} gap={3}>
                {size.lg && <GridItem />}
                <GridItem colSpan={2} style={styles.container}>
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
                </GridItem>
                <GridItem colSpan={2} style={styles.container}>
                    <form
                        action="https://formspree.io/f/xayvnbga"
                        method="POST"
                    >
                        <Stack style={styles.stack} spacing={4}>
                            <InputElement
                                name="Telefonnummer"
                                icon={faMobileAlt}
                                inputText={"Telefonnummer"}
                                validFunc={validatePhone}
                                tooltip={"Ugyldig telefonnummer"}
                            />
                            <InputElement
                                name="_replyto"
                                icon={faEnvelope}
                                inputText={"E-post"}
                                validFunc={validateEmail}
                                tooltip={"Ugyldig e-post-adresse"}
                            />
                            <InputElement
                                name="subject"
                                icon={faAngleRight}
                                inputText={"Emne"}
                                validFunc={validateSubject}
                                tooltip={"Emnet er for kort"}
                            />
                            <Textarea
                                name="Innhold"
                                placeholder='Innhold'
                                resize="vertical"
                                height={"215px"}
                            />
                            <Button
                                type="submit"
                                disabled={!validEmail || !validPhone || !validSubject}
                                leftIcon={<EmailIcon />}
                                width="200px"
                                borderColor={"#82C882"}
                                border={"2px"}
                                variant='outline'
                            >
                                Send henvendelse
                            </Button>
                        </Stack>
                    </form>
                </GridItem>
            </Grid>
            <div style={styles.bottom}/>
        </>
    )
}
