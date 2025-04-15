import accessibility from "./product/accessibility.svg";
import animation from "./product/animation.svg";
import figma from "./product/figma.svg";
import seo from "./product/seo.svg";
import content from "./product/content.svg";
import typography from "./product/typography.svg";
import popUp from "./product/popUp.svg";
import editor from "./product/editor.svg";
import form from "./product/form.svg";
import grids from "./product/grids.svg";
import media from "./product/media.svg";

import blogs from "./resources/blogs.svg";
import documentation from "./resources/documentation.svg";
import notes from "./resources/notes.svg";

import contact from "./support/contact.svg";
import feature from "./support/feature.svg";
import support from "./support/support.svg";

import { appIntegrationIcons } from "./appIntegration";

import control from "./dependencies/control.svg";
import dollar from "./dependencies/dollar.svg";
import secure from "./dependencies/secure.svg";
import workflow from "./dependencies/workflow.svg";

const products = {
  accessibility,
  animation,
  content,
  figma,
  seo,
  typography,
  popUp,
  editor,
  form,
  grids,
  media,
};
const resources = { blogs, documentation, notes };

const supportItems = {
  contact,
  feature,
  support,
};

const dependencies = {
  control,
  dollar,
  secure,
  workflow,
};

export default {
  products,
  resources,
  supportItems,
  appIntegrationIcons,
  dependencies,
};
