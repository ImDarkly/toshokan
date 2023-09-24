import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Accordion as UseAccordion, AccordionItem, Progress, Button, Link, Tooltip } from '@nextui-org/react';
import { ContentCopy } from '../../assets/icons/ContentCopyIcon';
import { TickIcon } from '../../assets/icons/TickIcon';

const Accordion = ({ status }) => {
    const orders = useSelector(store => store.orders);
    const [copiedTitle, setCopiedTitle] = useState(null);
    
    const progressData = [
        { value: 25, label: 'Photopaper, A3' },
        { value: 90, label: 'Cyan' },
        { value: 9, label: 'Magenta' },
        { value: 67, label: 'Yellow' },
        { value: 100, label: 'Black' },
    ];

    const copyTitle = (title, orderId) => {
        navigator.clipboard.writeText(title)
        .then(() => {
            console.log('Text copied to clipboard:', title);
            setCopiedTitle(orderId);
            setTimeout(() => {
                setCopiedTitle(null);
            }, 1000);
          })
          .catch(err => {
            console.error('Could not copy text to clipboard:', err);
          });
    }

    return (
        <UseAccordion 
            variant="splitted" 
            className="px-0 gap-1 p-4"
            >  
            {orders.filter(order => order.status === status).map(order => (
                <AccordionItem
                    key={order.id}
                    title={order.title}
                    startContent={
                        <Tooltip 
                            placement='bottom'
                            content={
                                <div>
                                    <p>Copy title</p>
                                </div>
                            }
                        >
                            <Button onClick={() => copyTitle(order.title, order.id)} isIconOnly as={Link} color="default" variant="light">
                                {copiedTitle === order.id ? <TickIcon color="text-slate-400" /> : <ContentCopy color="text-slate-400" />}
                            </Button>
                        </Tooltip>
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
    );
}

export default Accordion;
