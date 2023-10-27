'use client';
import Link from 'next/link';

import { FacebookIcon } from '../icon';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import {
  BellIcon,
  ChatBubbleBottomCenterIcon,
  ChevronDownIcon,
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';

export const PopoverMenu = () => {
  const [isChatsOpen, setIsChatsOpen] = useState<Boolean>(false);
  const [isNotificationsOpen, setIsNotificationsOpen] =
    useState<Boolean>(false);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState<Boolean>(false);
  const refChatNotiPanel = useRef<HTMLDivElement>(null);
  const reset = useRef(1);

  const chatsHandler = () => {
    console.log('chatsHandler', isChatsOpen);
    if (!isChatsOpen) {
      setIsChatsOpen(!isChatsOpen);
      setIsNotificationsOpen(false);
      setIsSidePanelOpen(true);
    } else {
      setIsChatsOpen(!isChatsOpen);
      setIsSidePanelOpen(false);
      setIsNotificationsOpen(false);
    }
  };
  const notificationsHandler = () => {
    if (!isNotificationsOpen) {
      setIsNotificationsOpen(!isNotificationsOpen);
      setIsChatsOpen(false);
      setIsSidePanelOpen(true);
    }
    setIsNotificationsOpen(!isNotificationsOpen);
    setIsChatsOpen(false);
    setIsSidePanelOpen(true);
  };

  useEffect(() => {
    const checkIfLickedOutside = (e: MouseEvent) => {
      if (
        isSidePanelOpen &&
        refChatNotiPanel.current &&
        !refChatNotiPanel.current.contains(e.target as Node)
      ) {
        console.log('in if');
        setIsSidePanelOpen(false);
        if (reset.current === 1) {
          setIsChatsOpen(false);
          setIsNotificationsOpen(false);
          reset.current = 0;
        }
      }
    };
    // reset = 0;

    document.addEventListener('mousedown', checkIfLickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfLickedOutside);
    };
  }, [isSidePanelOpen, isChatsOpen, isNotificationsOpen]);
  return <div>PopoverMenu</div>;
};
