import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

const MainContent = ({ children }) => {
  return (
    <Box pad={{ horizontal: 'large' }}>
      {children &&
        (children.length > 1
          ? children.map((child, index) => {
              return React.cloneElement(child, {
                lastSection: index === children.length - 1,
              });
            })
          : React.cloneElement(children, {
              lastSection: true,
            }))}
    </Box>
  );
};

MainContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

export default MainContent;