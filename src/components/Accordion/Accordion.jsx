import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Accordion as UseAccordion, AccordionItem, Progress, Button, Tooltip } from '@nextui-org/react';
import { ContentCopy } from '../../assets/icons/ContentCopyIcon';
import { TickIcon } from '../../assets/icons/TickIcon';
import { ChevronLeft } from '../../assets/icons/ChevronLeft';

const TOOLTIP_CONTENT = (
  <div>
    <p>Copy title</p>
  </div>
);

const Accordion = ({ status }) => {
  const orders = useSelector(store => store.orders);
  const [copiedTitles, setCopiedTitles] = useState({});

  const progressData = [
    { value: 25, label: 'Photopaper, A3' },
    { value: 90, label: 'Cyan' },
    { value: 9, label: 'Magenta' },
    { value: 67, label: 'Yellow' },
    { value: 100, label: 'Black' },
  ];

  const copyTitle = (title, orderId) => {
    navigator.vibrate(1);
    navigator.clipboard.writeText(title)
      .then(() => {
        console.log('Text copied to clipboard:', title);
        setCopiedTitles(prevCopiedTitles => ({
          ...prevCopiedTitles,
          [orderId]: true
        }));
        setTimeout(() => {
          setCopiedTitles(prevCopiedTitles => ({
            ...prevCopiedTitles,
            [orderId]: false
          }));
        }, 1000);
      })
      .catch(err => {
        console.error('Could not copy text to clipboard:', err);
      });
  };

  return (
    <UseAccordion
      variant="splitted"
      className="px-0 gap-1 p-4"
    >
      {orders.filter(order => order.status === status).map(order => {
        const isTitleCopied = copiedTitles[order.id];

        return (
          <AccordionItem
            key={order.id}
            title={order.title}
            indicator={<ChevronLeft />}
            startContent={
              <Tooltip
                className='rounded-lg'
                placement='bottom'
                content={TOOLTIP_CONTENT}
              >
                <Button
                  isDisabled={isTitleCopied}
                  onClick={() => copyTitle(order.title, order.id)}
                  isIconOnly
                  color="default"
                  variant="light"
                >
                  {isTitleCopied ? <TickIcon styles={"text-slate-400"} /> : <ContentCopy styles={"text-slate-400"} />}
                </Button>
              </Tooltip>
            }
            className='group-[.is-splitted]:rounded group-[.is-splitted]:shadow-none group-[.is-splitted]:bg-slate-100 group-[.is-splitted]:first:rounded-t-2xl group-[.is-splitted]:last:rounded-b-2xl'
            classNames={{
              indicator: "text-primary-400",
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
        );
      })}
    </UseAccordion>
  );
}

export default Accordion;
