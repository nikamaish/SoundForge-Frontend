
import { Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

export const CommonInput = ({
    name,
    control,
    label,
    placeholder,
    errors,
    type = "text",
}) => {
    const error = errors?.[name];


    return (
        <div className="common-field">
            <label htmlFor={name}>{label}</label>

            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <InputText
                        id={name}
                        type={type}
                        value={field.value ?? ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        onBlur={field.onBlur}
                        ref={field.ref}
                        placeholder={placeholder}
                        className={error ? "p-invalid" : ""}
                    />
                )}
            />

            {error && (
                <small className="common-error">{error.message}</small>
            )}
        </div>
    );
};

export function CommonPassword({
    name,
    control,
    label,
    placeholder,
    errors,
}) {
    const error = errors?.[name];

    return (
        <div className="common-field">
            <label htmlFor={name}>{label}</label>

            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Password
                        inputId={name}
                        value={field.value ?? ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        onBlur={field.onBlur}
                        inputRef={field.ref}
                        placeholder={placeholder}
                        feedback={false}
                        toggleMask
                        className={error ? "p-invalid" : ""}
                        inputClassName="common-password-input"
                    />
                )}
            />

            {error && (
                <small className="common-error">{error.message}</small>
            )}
        </div>
    );
}

export function CommonSelect({
    name,
    control,
    label,
    placeholder,
    options,
    errors,
}) {
    const error = errors?.[name];

    return (
        <div className="common-field">
            <label htmlFor={name}>{label}</label>

            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Dropdown
                        inputId={name}
                        value={field.value ?? null}
                        options={options}
                        onChange={(e) => field.onChange(e.value)}
                        onBlur={field.onBlur}
                        placeholder={placeholder}
                        className={error ? "p-invalid" : ""}
                    />
                )}
            />

            {error && (
                <small className="common-error">{error.message}</small>
            )}
        </div>
    );
}

export function CommonButton({
    label,
    type = "button",
    loading = false,
    disabled = false,
    icon,
    onClick,
}) {
    return (
        <Button
            type={type}
            label={label}
            loading={loading}
            disabled={disabled}
            icon={icon}
            onClick={onClick}
            className="common-button"
        />
    );
}
