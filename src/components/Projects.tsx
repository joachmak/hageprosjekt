import { Heading } from "@chakra-ui/react";

export default function Projects() {
    let styles = {
        heading: {
            marginBottom: 35,
            color: "#555",
        }
    }
    return (
        <>
            <div className="triangleDivTop" />
            <Heading style={styles.heading} align="center">
                Prosjekter
            </Heading>
        </>
    )
}