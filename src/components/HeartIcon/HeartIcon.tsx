import React, { MouseEventHandler } from "react";
import styled from "styled-components";

interface HeartIconProps {
  isFavorite?: boolean;
  onClick?: MouseEventHandler<HTMLImageElement>;
}
const heartIconPath =
  process.env.NODE_ENV === "production"
    ? "/images/HeartIcon.svg"
    : "/images/HeartIcon.svg";

const heartIconEmptyPath =
  process.env.NODE_ENV === "production"
    ? "/images/HeartEmptyIcon.svg"
    : "/images/HeartEmptyIcon.svg";

const HeartIcon: React.FC<HeartIconProps> = ({
  isFavorite = true,
  onClick = () => {},
}) => (
  <StyledHeartIcon
    src={isFavorite ? heartIconPath : heartIconEmptyPath}
    alt="Heart Icon"
    onClick={onClick}
  />
);

const StyledHeartIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export default HeartIcon;
