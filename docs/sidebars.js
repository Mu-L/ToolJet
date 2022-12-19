/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: 'Setup',
      link: { type: 'doc', id: 'setup/index' },
      items: [
        'setup/try-tooljet',
        'setup/digitalocean',
        'setup/docker',
        'setup/heroku',
        'setup/ec2',
        'setup/ecs',
        'setup/kubernetes',
        'setup/kubernetes-gke',
        'setup/kubernetes-aks',
        'setup/google-cloud-run',
        'setup/client',
        'setup/env-vars',
        'setup/http-proxy',
        'setup/tooljet-subpath',
      ],
    },
    'security',
    'tracking',
    {
      type: 'category',
      label: 'Tutorial',
      link: {
        type: 'generated-index',
        title: 'Getting Started with ToolJet',
        description:
          "A primer on getting started with building an application with ToolJet!",
        keywords: ['tutorial'],
      },
      items: [
        'tutorial/creating-app',
        'tutorial/adding-a-datasource',
        'tutorial/building-queries',
        'tutorial/transformations',
        'tutorial/adding-widget',
        'tutorial/actions',
        'tutorial/debugger',
        'tutorial/mobile-layout',
        'tutorial/versioning-and-release',
        'tutorial/sharing-and-deploying',
        'tutorial/manage-users-groups',
        'tutorial/keyboard-shortcuts',
        'tutorial/multiworkspace',
        'tutorial/workspace-environment-variables',
        {
          type: 'category',
          label: 'Dashboard',
          items: [
            'tutorial/app-menu-options',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Datasource Reference',
      items: [
        'data-sources/airtable',
        'data-sources/s3',
        'data-sources/amazonses',
        'data-sources/appwrite',
        'data-sources/athena',
        'data-sources/baserow',
        'data-sources/bigquery',
        'data-sources/firestore',
        'data-sources/clickhouse',
        'data-sources/cosmosdb',
        'data-sources/couchdb',
        'data-sources/dynamodb',
        'data-sources/elasticsearch',
        'data-sources/gcs',
        'data-sources/google.sheets',
        'data-sources/graphql',
        'data-sources/influxdb',
        'data-sources/mailgun',
        'data-sources/mariadb',
        'data-sources/minio',
        'data-sources/mongodb',
        'data-sources/mssql',
        'data-sources/mysql',
        'data-sources/n8n',
        'data-sources/notion',
        'data-sources/openapi',
        'data-sources/oracledb',
        'data-sources/postgresql',
        'data-sources/redis',
        'data-sources/restapi',
        'data-sources/rethinkdb',
        'data-sources/run-js',
        'data-sources/run-py',
        'data-sources/saphana',
        'data-sources/sendgrid',
        'data-sources/slack',
        'data-sources/smtp',
        'data-sources/snowflake',
        'data-sources/stripe',
        'data-sources/twilio',
        'data-sources/typesense',
        'data-sources/woocommerce',
        'data-sources/zendesk',
      ],
    },
    {
      type: 'category',
      label: 'Widget Reference',
      items: [
        'widgets/button',
        'widgets/button-group',
        'widgets/calendar',
        'widgets/chart',
        'widgets/checkbox',
        'widgets/circular-progress-bar',
        'widgets/code-editor',
        'widgets/color-picker',
        'widgets/container',
        'widgets/custom-component',
        'widgets/date-range-picker',
        'widgets/datepicker',
        'widgets/divider',
        'widgets/dropdown',
        'widgets/file-picker',
        'widgets/html',
        'widgets/icon',
        'widgets/iframe',
        'widgets/image',
        'widgets/kanban',
        'widgets/link',
        'widgets/listview',
        'widgets/map',
        'widgets/modal',
        'widgets/multiselect',
        'widgets/number-input',
        'widgets/password-input',
        'widgets/pdf',
        'widgets/pagination',
        'widgets/qr-scanner',
        'widgets/radio-button',
        'widgets/range-slider',
        'widgets/rich-text-editor',
        'widgets/spinner',
        'widgets/star',
        'widgets/statistics',
        'widgets/steps',
        'widgets/svg-image',
        'widgets/table',
        'widgets/tabs',
        'widgets/tags',
        'widgets/text-input',
        'widgets/text',
        'widgets/textarea',
        'widgets/timeline',
        'widgets/timer',
        'widgets/toggle-switch',
        'widgets/tree-select',
        'widgets/vertical-divider',
      ],
    },
    {
      type: 'category',
      label: 'Actions Reference',
      link: {
        type: 'generated-index',
        title: 'Actions Reference',
        description:
          "All the actions that can be performed through event handlers",
        keywords: ['actions', 'events'],
      },
      items: [
        'actions/show-alert',
        'actions/logout',
        'actions/run-query',
        'actions/open-webpage',
        'actions/go-to-app',
        'actions/show-modal',
        'actions/close-modal',
        'actions/copy-to-clipboard',
        'actions/set-localstorage',
        'actions/generate-file',
        'actions/set-table-page',
        'actions/set-variable',
        'actions/unset-variable',
        'actions/control-component',
      ],
    },
    {
      type: 'category',
      label: 'How To',
      link: {
        type: 'generated-index',
        title: 'How To Guides',
        description:
          "How To Guides for all the things ToolJet",
        keywords: ['how to'],
      },
      items: [
        'how-to/use-inspector',
        'how-to/access-cellvalue-rowdata',
        'how-to/bulk-update-multiple-rows',
        'how-to/access-currentuser',
        'how-to/run-actions-from-runjs',
        'how-to/run-query-at-specified-intervals',
        'how-to/access-users-location',
        'how-to/s3-custom-endpoints',
        'how-to/oauth2-authorization',
        'how-to/upload-files-aws',
        'how-to/upload-files-gcs',
        'how-to/loading-image-pdf-from-db',
      ],
    },
    {
      type: 'category',
      label: 'Enterprise',
      items: [
        'Enterprise/audit_logs',
        'Enterprise/white-label',
      ]
    },
    'marketplace',
    {
      type: 'category',
      label: 'User Authentication',
      link: {
        type: 'generated-index',
        title: 'User Authentication',
        description:
          "Guides for setting up User Authentication and managing Single Sign-On",
        keywords: ['SSO', 'authentication'],
      },
      collapsed: true,
      items: [
        'user-authentication/user-lifecycle',
        'user-authentication/general-settings',
        'user-authentication/password-login',
        {
          type: 'category',
          label: 'SSO',
          items: [
            'user-authentication/sso/github',
            'user-authentication/sso/google',
            {
              type: 'category',
              label: 'OpenId Connect',
              link: {
                type: 'generated-index',
                title: 'OpenId Connect',
                description: " ",
                keywords: ['okta', 'openid', 'azureAD'],
              },
              collapsed: false,
              items: [
                'user-authentication/sso/openid/setup',
                'user-authentication/sso/openid/azuread',
                'user-authentication/sso/openid/okta',
                'user-authentication/sso/openid/google-openid',
              ],
            }
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Contributing Guide',
      link: {
        type: 'generated-index',
        title: 'Contributing Guide',
        description:
          "Guides for contributing to ToolJet",
        keywords: ['contribute', 'contributing'],
      },
      collapsed: false,
      items: [
        'contributing-guide/setup/architecture',
        {
          type: 'category',
          label: 'Setup',
          items: [
            'contributing-guide/setup/macos',
            'contributing-guide/setup/docker',
            'contributing-guide/setup/ubuntu',
          ],
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'contributing-guide/tutorials/creating-widget',
            'contributing-guide/tutorials/creating-a-plugin',
          ],
        },
        'contributing-guide/testing',
        'contributing-guide/l10n',
        {
          type: 'category',
          label: 'Troubleshooting',
          items: [
            'contributing-guide/troubleshooting/eslint',
          ],
        },
        'contributing-guide/code-of-conduct',
        'contributing-guide/slackcoc',
      ],
    },
  ],
};

module.exports = sidebars;
