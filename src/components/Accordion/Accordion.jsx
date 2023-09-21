import React, { useState } from 'react';
import { StyledAccordion } from './Accordion.styles';
import { useSelector } from 'react-redux';
import './Accordion.css'
import { Accordion as UseAccordion, AccordionItem, Progress, Button, Link, Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';
import { ContentCopy } from '../../assets/icons/ContentCopy';

const Accordion = ({ status }) => {
    const orders = useSelector(store => store.orders);
    const progressData = [
        { value: 25, label: 'Photopaper, A3' },
        { value: 90, label: 'Cyan' },
        { value: 9, label: 'Magenta' },
        { value: 67, label: 'Yellow' },
        { value: 100, label: 'Black' },
    ];

    const copyTitle = (title) => {
        navigator.clipboard.writeText(title)
        .then(() => {
            console.log('Text copied to clipboard:', title);
          })
          .catch(err => {
            console.error('Could not copy text to clipboard:', err);
          });
    }

    return (
        <StyledAccordion>
            <UseAccordion 
                variant="splitted" 
                className="px-0 gap-1 py-4"
                >  
                {orders.filter(order => order.status === status).map(order => (
                    <AccordionItem
                        key={order.id}
                        title={order.title}
                        startContent={
                            <Popover color='default' shouldBlockScroll>
                                <PopoverTrigger>
                                    <Button onClick={() => copyTitle(order.title)} isIconOnly as={Link} color="default" variant="light">
                                        <ContentCopy />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent >
                                    <p>Title</p>
                                    <p>coppied!</p>
                                </PopoverContent>
                            </Popover>
                        }
                        className='group-[.is-splitted]:rounded group-[.is-splitted]:shadow-none group-[.is-splitted]:bg-slate-100 group-[.is-splitted]:first:rounded-t-2xl group-[.is-splitted]:last:rounded-b-2xl'
                        classNames={{
                            indicator: "text-primary-400 text-lg",
                            title: "text-ellipsis overflow-hidden"
                        }}
                    >
                        <div className="flex flex-col">
                            {progressData.map(progress => (
                                <Progress 
                                    key={progress.label}
                                    label={progress.label}
                                    value={progress.value}
                                    showValueLabel={true}
                                    size='md'
                                    className='my-5'
                                    classNames={{
                                        label: "text-lg text-slate-500",
                                        indicator: "bg-primary-400",
                                        track: "bg-primary-100",
                                        value: "text-slate-500"
                                    }}
                                />
                            ))}
                        </div>
                    </AccordionItem>
                ))}
            </UseAccordion>
        </StyledAccordion>
    );
}

export default Accordion;
