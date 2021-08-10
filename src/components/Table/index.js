import React from "react";

export const Table = function (props) {
  return <table>{props.children}</table>;
};

export const Thead = function (props) {
  return <thead>{props.children}</thead>;
};

export const Tbody = function (props) {
  return <tbody>{props.children}</tbody>;
};

export const Tfoot = function (props) {
  return <tfoot>{props.children}</tfoot>;
};

export const Tr = function (props) {
  return <tr>{props.children}</tr>;
};

export const Td = function (props) {
  return <td>{props.children}</td>;
};

export const Th = function (props) {
  return <th>{props.children}</th>;
};

export const TableCaption = 8;
