import React from 'react';
import PageHeader from '../components/Page/PageHeader';
import PageNavigation from '../components/Page/PageNavigation';

interface PageProps {
  children?: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({children}) => {
    return(
        <div>
          <div>
            <PageHeader />
            <PageNavigation />
            </div>
            <div>
            {children}
            </div>
        </div>
    );
}