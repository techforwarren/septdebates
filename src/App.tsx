import React, { FunctionComponent } from 'react';
import YAML from 'yaml';
import fs from 'fs';
import './App.css';
import { Hero, CampaignFooter, BigVideo } from './components';
import { AppContent } from './types';

import ContentKey from './content-key.json';
console.log('ContentFile: ',ContentKey);

export const App:FunctionComponent<{}> = () => {
  const Content:AppContent = ContentKey;

  return (
    <div className="App">
      <Hero {...Content.hero} />
      <BigVideo youtubeVideoId={'ayDyh8fjtww'} />
      <CampaignFooter />
    </div>
  );
}

export default App;
