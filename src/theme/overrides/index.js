//
import Fab from './Fab';
import Card from './Card';
import Tabs from './Tabs';
import Menu from './Menu';
import Link from './Link';
import Lists from './List';
import Table from './Table';
import Badge from './Badge';
import Paper from './Paper';
import Input from './Input';
import Drawer from './Drawer';
import Dialog from './Dialog';
import Avatar from './Avatar';
import Slider from './Slider';
import Button from './Button';
import Switch from './Switch';
import Select from './Select';
import SvgIcon from './SvgIcon';
import Tooltip from './Tooltip';
import Popover from './Popover';
import Stepper from './Stepper';
import DataGrid from './DataGrid';
import Skeleton from './Skeleton';
import Backdrop from './Backdrop';
import Progress from './Progress';
import Timeline from './Timeline';
import Accordion from './Accordion';
import Typography from './Typography';
import Pagination from './Pagination';
import Breadcrumbs from './Breadcrumbs';
import ButtonGroup from './ButtonGroup';
import Autocomplete from './Autocomplete';
import ToggleButton from './ToggleButton';
import ControlLabel from './ControlLabel';
import LoadingButton from './LoadingButton';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Fab(theme),
    Tabs(theme),

    Card(theme),
    Menu(theme),
    Link(theme),
    Input(theme),

    Badge(theme),
    Lists(theme),
    Table(theme),
    Paper(theme),

    Switch(theme),
    Select(theme),
    Button(theme),

    Dialog(theme),
    Avatar(theme),
    Slider(theme),
    Drawer(theme),
    Stepper(theme),
    Tooltip(theme),
    Popover(theme),
    SvgIcon(theme),

    DataGrid(theme),
    Skeleton(theme),
    Timeline(theme),

    Backdrop(theme),
    Progress(theme),
    Accordion(theme),
    Typography(theme),
    Pagination(theme),
    ButtonGroup(theme),
    Breadcrumbs(theme),
    Autocomplete(theme),
    ControlLabel(theme),
    ToggleButton(theme),
    LoadingButton(theme)
  );
}
