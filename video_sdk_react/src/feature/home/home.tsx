/* eslint-disable no-restricted-globals */
import React, { MouseEventHandler } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Card, Button } from 'antd';
import { IconFont } from '../../component/icon-font';
import './home.scss';
import InputForm from './join/joinInputForm';

const { Meta } = Card;
interface HomeProps extends RouteComponentProps {
  status: string;
  onLeaveOrJoinSession: (topic: string, name: string, password: string, role: string) => void;
}
const Home: React.FunctionComponent<HomeProps> = (props) => {
  const { history, status, onLeaveOrJoinSession } = props;
  const onCardClick = (type: string) => {
    history.push(`/${type}${location.search}`);
  };
  const featureList = [
    {
      key: 'video',
      icon: 'icon-meeting',
      title: 'Audio, video and share',
      description: 'Gallery Layout, Start/Stop Audio, Mute/Unmute, Start/Stop Video, Start/Stop Screen Share'
    },
    {
      key: 'chat',
      icon: 'icon-chat',
      title: 'Session chat',
      description: 'Session Chat, Chat Priviledge'
    },
    {
      key: 'command',
      icon: 'icon-chat',
      title: 'Command Channel chat',
      description: 'Session Command Channel chat'
    },
    {
      key: 'Subsession',
      icon: 'icon-group',
      title: 'Subsession',
      description: 'Open/Close Subsession, Assign/Move Participants into Subsession, Join/Leave Subsession'
    },
    {
      key: 'preview',
      icon: 'icon-meeting',
      title: 'Local Preview',
      description: 'Audio and Video preview'
    },
    {
      key: 'test',
      icon: '',
      title: '테스트',
      description: '...'
    }
  ];
  let actionText;
  if (status === 'connected') {
    actionText = 'Leave';
  } else if (status === 'closed') {
    actionText = 'Join';
  }
  return (
    <div>
      <div className="nav">
        <a href="/" className="navhome">
          <img src="./logo.svg" alt="Home" />
          <span>VideoSDK Demo</span>
        </a>
        <div className="navdoc">
          <a href="https://marketplace.zoom.us/docs/sdk/video/web/reference" target="_blank" rel="noreferrer">
            <span>API Reference</span>
          </a>

          <a href="https://marketplace.zoom.us/docs/sdk/video/web/build/sample-app" target="_blank" rel="noreferrer">
            <span>Doc</span>
          </a>
        </div>
        <div className="navinput-container">
          {actionText && <InputForm onLeaveOrJoinSession={onLeaveOrJoinSession} status={status} />}
        </div>
      </div>

      <div className="home">
        <h1>My test app</h1>
        <div className="feature-entry">
          {featureList.map((feature) => {
            const { key, icon, title, description } = feature;
            return (
              <Card
                cover={<IconFont style={{ fontSize: '72px' }} type={icon} />}
                hoverable
                style={{ width: 320 }}
                className="entry-item"
                key={key}
                onClick={() => onCardClick(key)}
              >
                <Meta title={title} description={description} />
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
