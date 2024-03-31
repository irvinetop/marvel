import React from "react";
import styled from "styled-components";

const StyledHeartIcon = styled.svg`
  width: 24px; // Ajusta el tamaño según necesites
  height: 24px; // Ajusta el tamaño según necesites
  color: red; // Ajusta el color según necesites
`;

const HeartIcon: React.FC = () => (
  <StyledHeartIcon viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12.1 4.248c-1.464-1.833-3.8-2.998-6.315-2.998C2.533 1.25 0 3.783 0 6.748c0 2.084.786 3.937 2.08 5.317C4.375 14.21 12 21.25 12 21.25s7.625-7.04 9.92-9.185C23.214 10.685 24 8.832 24 6.748c0-2.965-2.533-5.498-5.785-5.498-2.515 0-4.851 1.165-6.315 2.998z"
    />
  </StyledHeartIcon>
);

export default HeartIcon;
