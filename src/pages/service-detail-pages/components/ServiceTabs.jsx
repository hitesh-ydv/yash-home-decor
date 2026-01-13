import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServiceTabs = ({ tabs, activeTab, onTabChange }) => {
  const [isScrollable, setIsScrollable] = useState(false);

  return (
    <div className="sticky top-16 z-30 bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-1 md:gap-2 py-2 min-w-max md:min-w-0">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => onTabChange(tab?.id)}
                  className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg transition-all duration-300 flex-shrink-0 ${
                    activeTab === tab?.id
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-transparent text-muted-foreground hover:bg-muted'
                  }`}
                >
                  <Icon
                    name={tab?.icon}
                    size={18}
                    color={activeTab === tab?.id ? '#FFFFFF' : 'var(--color-muted-foreground)'}
                  />
                  <span className="text-sm md:text-base font-medium whitespace-nowrap">
                    {tab?.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTabs;