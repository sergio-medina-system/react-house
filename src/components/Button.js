import PropTypes from "prop-types";

/*
 * Button component that receives "children" as props as well as
 * different terms such as "primary" or "pill" to represent
 * the colors or shape of the button's purpose"
 *
 * The prop-types library is used to ensure that the received props
 * meet the specified data type
 */

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  pill,
}) {
  return <button>{children}</button>;
}

Button.propTypes = {
  chlidren: PropTypes.node,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  pill: PropTypes.bool,
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;
