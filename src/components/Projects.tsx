import {Grid, GridItem, Heading} from "@chakra-ui/react";
import {useContext} from "react";
import {sizeContext} from "../App";

export default function Projects() {
    const size = useContext(sizeContext)
    // lg = 3, md = 2, sm = 1
    let cols = size.lg ? 3 : (size.md ? 2 : 1);
    let projects = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    let rows = Math.ceil(projects.length / cols)
    let rowHeight = 200
    let styles = {
        heading: {
            marginBottom: 35,
            color: "#555",
        },
        parentGrid: {
            marginBottom: 50,
        }
    }
    return (
        <>
            <div className="triangleDivTop" />
            <Heading style={styles.heading} align="center">
                Prosjekter
            </Heading>
            <Grid style={styles.parentGrid} templateColumns={'repeat(' + (size.lg ? 6 : 4) + ', 1fr)'} gap={3}>
                {size.lg && <GridItem />}
                <GridItem colSpan={4} >
                    <Grid templateColumns={'repeat(' + cols + ', 1fr)'} templateRows={'repeat(' + rows + ', ' + rowHeight + 'px)'} gap={2}>
                        {projects.map(project => <GridItem background="gray.200" />)}
                    </Grid>
                </GridItem>
                {size.lg && <GridItem />}
            </Grid>
        </>
    )
}