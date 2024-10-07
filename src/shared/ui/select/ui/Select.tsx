import cn from "classnames";
import {ChangeEvent, ComponentProps, useEffect, useState} from "react";
import useSelect from "../lib/useSelect";
import {TSelectOption, TUseSelect} from "../types";
import s from "./Select.module.scss";
import {SelectOption} from "./SelectOption";


export type SelectProps = ComponentProps<'input'> & {
    currentOption: TSelectOption
    options: TSelectOption[]
    value: TSelectOption
    label?: string
    setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void
    toggleFocus?: () => void
    error?: string
    withTooltipError?: string
    withSearch?: boolean
    onChangeHandler: (item?: any) => void
    afterChange?: (val: any) => void
}

export function Select({afterChange, onChangeHandler, label, options, setFieldValue, currentOption, toggleFocus, error, withTooltipError, value, withSearch, ...inputProps}: SelectProps) {
    let [searchValue, setSearchValue] = useState('');
    let [filteredOptions, setFilteredOptions] = useState<TSelectOption[]>(options);
    let {arrowRef, inputRef, isVisible, openSelect, closeSelect, setIsVisible}: TUseSelect = useSelect({
        withSearch,
        searchValue,
        clickOut: withSearch ? () => setSearchValueHandler(value.title) : undefined,
    });
    let [data, setData] = useState<string | number>();

    useEffect(() => {
        data && afterChange?.(data);
    }, [data]);

    function setSearchValueHandler(value: string) {
        setSearchValue(value);
        setFilteredOptions(options);
    }

    function onChangeOption(option: TSelectOption): void {
        withSearch && setSearchValueHandler(option.title);
        closeSelect();
        setFieldValue?.(inputProps.name as string, option);
        toggleFocus?.();
        onChangeHandler?.(option);
        setData(option.value);
    }

    function getDefaultTitle(value: string | number): string {
        let option: TSelectOption | undefined = options.find((el: TSelectOption) => el.value == value);
        return option?.title ?? '';
    }

    function onChangeSearch(e: ChangeEvent<HTMLInputElement>) {
        let {value} = e.target;
        setSearchValue(value);
        setIsVisible(true);
        setFilteredOptions(options.filter((op: TSelectOption) => {
            if (!withSearch || !value) return true;
            return op.title.toLowerCase().includes(value.toLowerCase());
        }));
    }

    return (
        <div className={cn(s._, {
            [s.open]: isVisible,
        })}>

            {label && <p className="label">{label}</p>}

            <div className={s.container}>

                <label className={cn(s.input, {
                    [s.with_icon]: currentOption?.icon,
                    [s.error]: error,
                })}>
                    {currentOption?.icon &&
                        <div className={s.input_icon}>
                            <img src={currentOption?.icon} alt="select icon"/>
                        </div>
                    }
                    {withSearch
                        ? <input
                            {...inputProps}
                            type="text"
                            ref={inputRef}
                            onClick={openSelect}
                            value={searchValue || ''}
                            onChange={onChangeSearch}
                            autoComplete={'off'}
                        />
                        : <input
                            readOnly
                            ref={inputRef}
                            type="text"
                            value={value.title || getDefaultTitle(value.value)}
                            onClick={openSelect}
                            {...inputProps}
                        />}
                    <div ref={arrowRef} className={s.arrow}>
                        {/*<InputArrowIcon/>*/}
                    </div>
                    {/*{(error && withTooltipError) && <TooltipError content={error} maxWidth={'30rem'} className={s.tooltip_error}/>}*/}
                </label>

                <div>
                    {filteredOptions.length
                        ? filteredOptions.map((option: TSelectOption) =>
                            <SelectOption
                                key={option.value}
                                name={inputProps.name || ''}
                                value={option.value}
                                option={option}
                                defaultChecked={currentOption?.value === option.value}
                                onChange={() => onChangeOption(option)}
                            />)
                        : <SelectOption
                            disabled
                            key={'No options'}
                            name={'No options'}
                            value={'No options'}
                            option={{title: 'No options', value: 'No options'}}
                        />
                    }
                </div>
            </div>
        </div>
    );
}
