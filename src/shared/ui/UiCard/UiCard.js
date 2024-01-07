import React from 'react';
import omit from 'rc-util/lib/omit';

import { Grid, Skeleton, Tabs } from "antd";
import { ConfigContext } from "antd/es/config-provider";
import { useContext } from "react";
import { useSize } from './lib/useSize';
import useStyle from './style';
import classNames from 'classnames';

const ActionNode = (props) => {
    const { prefixCls, actions = [] } = props;
    return (
        <ul className={`${prefixCls}-actions`}>
            {actions.map((action, index) => {
                // Move this out since eslint not allow index key
                // And eslint-disable makes conflict with rollup
                // ref https://github.com/ant-design/ant-design/issues/46022
                const key = `action-${index}`;
                return (
                    <li style={{ width: `${100 / actions.length}%` }} key={key}>
                        <span>{action}</span>
                    </li>
                );
            })}
        </ul>
    );
};


export const UiCard = React.forwardRef((props, ref) => {
    const {
        prefixCls: customizePrefixCls,
        className,
        rootClassName,
        style,
        extra,
        headStyle = {},
        bodyStyle = {},
        title,
        loading,
        bordered = true,
        size: customizeSize,
        type,
        cover,
        actions,
        tabList,
        children,
        activeTabKey,
        defaultActiveTabKey,
        tabBarExtraContent,
        hoverable,
        tabProps = {},
        ...others
    } = props;

    const { getPrefixCls, direction, card } = useContext(ConfigContext);
    const prefixCls = getPrefixCls('card');
    const [wrapCSSVar, hashId, cssVarCls] = useStyle(prefixCls);

    const onTabChange = (key) => {
        props.onTabChange?.(key);
    };

    const isContainGrid = React.useMemo(() => {
        let containGrid = false;
        React.Children.forEach(children, (element) => {
            if (element && element.type && element.type === Grid) {
                containGrid = true;
            }
        });
        return containGrid;
    }, [children]);

    const loadingBlock = ({ children }) => (
        <Skeleton loading active paragraph={{ rows: 4 }} title={false}>
            {children}
        </Skeleton>
    );


    const hasActiveTabKey = activeTabKey !== undefined;
    const extraProps = {
        ...tabProps,
        [hasActiveTabKey ? 'activeKey' : 'defaultActiveKey']: hasActiveTabKey
            ? activeTabKey
            : defaultActiveTabKey,
        tabBarExtraContent,
    };

    let head;
    const mergedSize = useSize(customizeSize);
    const tabSize = !mergedSize || mergedSize === 'default' ? 'large' : mergedSize;
    const tabs = tabList ? (
        <Tabs
            size={tabSize}
            {...extraProps}
            className={`${prefixCls}-head-tabs`}
            onChange={onTabChange}
            items={tabList.map(({ tab, ...item }) => ({ label: tab, ...item }))}
        />
    ) : null;
    if (title || extra || tabs) {
        head = (
            <div className={`${prefixCls}-head`} style={headStyle}>
                <div className={`${prefixCls}-head-wrapper`}>
                    {title && <div className={`${prefixCls}-head-title`}>{title}</div>}
                    {extra && <div className={`${prefixCls}-extra`}>{extra}</div>}
                </div>
                {tabs}
            </div>
        );
    }
    const coverDom = cover ? <div className={`${prefixCls}-cover`}>{cover}</div> : null;
    const body = (
        <div className={`${prefixCls}-body`} style={bodyStyle}>
            {loading ? loadingBlock : children}
        </div>
    );

    const actionDom =
        actions && actions.length ? <ActionNode prefixCls={prefixCls} actions={actions} /> : null;

    const divProps = omit(others, ['onTabChange']);

    const classString = classNames(
        prefixCls,
        card?.className,
        {
            [`${prefixCls}-loading`]: loading,
            [`${prefixCls}-bordered`]: bordered,
            [`${prefixCls}-hoverable`]: hoverable,
            [`${prefixCls}-contain-grid`]: isContainGrid,
            [`${prefixCls}-contain-tabs`]: tabList && tabList.length,
            [`${prefixCls}-${mergedSize}`]: mergedSize,
            [`${prefixCls}-type-${type}`]: !!type,
            [`${prefixCls}-rtl`]: direction === 'rtl',
        },
        className,
        rootClassName,
        hashId,
        cssVarCls,
    );

    const mergedStyle = { ...card?.style, ...style };

    return wrapCSSVar(
        <div ref={ref} {...divProps} className={classString} style={mergedStyle}>
            {head}
            {coverDom}
            {body}
            {actionDom}
        </div>,
    );
});