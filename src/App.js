import * as React from 'react';

import Folk from 'components/folk';
import YouMissed from 'components/you-missed';
import Letters from 'components/letters';
import Layout from 'components/layout';
import useRandomWord from 'hooks/use-random-word';

function App() {
  const [usedLetters, setUsedLetters] = React.useState([]);
  const randomWord = useRandomWord();

  // Add/remove key down event listener
  React.useEffect(() => {
    const handleKeyDown = ({ key }) => {
      // Pressed key is not alphabetical or has been used already
      if (!/^[a-z]$/i.test(key) || usedLetters.includes(key.toUpperCase())) {
        return;
      }

      setUsedLetters(usedLetters.concat(key.toUpperCase()));
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [usedLetters]);

  const missedLetters = usedLetters.filter((l) => !randomWord.includes(l));
  const guessedLetters = usedLetters.filter((l) => randomWord.includes(l));

  return (
    <Layout>
      <Folk visiblePartsCount={missedLetters.length} />
      <YouMissed missedLetters={missedLetters} />
      <Letters word={randomWord} guessedLetters={guessedLetters} />
    </Layout>
  );
}

export default App;
