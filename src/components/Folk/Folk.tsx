import './Folk.scss';

import * as React from 'react';

// Folk's parts are in the order that they are rendered
// during the game.
const folkParts = [
  'head',
  'neck',
  'corpus',
  'arm arm--right',
  'arm arm--left',
  'hand hand--right',
  'hand hand--left',
  'leg leg--right',
  'leg leg--left',
  'foot foot--right',
  'foot foot--left',
];

interface FolkProps {
  visiblePartsCount: number;
}

function Folk({ visiblePartsCount }: FolkProps) {
  const visibleParts = folkParts.slice(0, visiblePartsCount);

  return (
    <FolkContainer>
      <div className="folk" data-testid="folk">
        {visibleParts.map(part => (
          <div key={part} className={part} />
        ))}
      </div>
    </FolkContainer>
  );
}

/**
 * Wraps the folk and adds the bar so it's easier to position it
 */
function FolkContainer({ children }: { children: React.ReactElement }) {
  return (
    <div className="folk-container">
      <div className="bar bar--horizontal" />
      <div className="bar bar--vertical" />
      {children}
    </div>
  );
}

export default Folk;
