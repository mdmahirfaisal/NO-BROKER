import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const sidNavData = [
    {
        title: "Questions 1",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.`
    },
    {
        title: "Questions 2",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.`
    },
    {
        title: "Questions 3",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.`
    },
    {
        title: "Questions 4",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.`
    },
    {
        title: "Questions 5",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.`
    },
    {
        title: "Questions 6",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.`
    },
]




export default function SideBarContent() {
    return (
        <div>
            {
                sidNavData?.map((data, index) => <Accordion
                    key={index}
                >
                    <AccordionSummary sx={{ backgroundColor: '#efefef', mb: 1 }} expandIcon={<ExpandMoreIcon />}>
                        <h5>{data.title}</h5>
                    </AccordionSummary>
                    <AccordionDetails>
                        <h5 className='text-gray-500'>{data.description}</h5>
                    </AccordionDetails>
                </Accordion>)
            }

        </div>
    );
}