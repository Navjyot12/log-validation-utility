export const onCancelSchema = {
  type: 'object',
  properties: {
    context: {
      type: 'object',
      properties: {
        domain: {
          type: 'string',
          minLength: 1,
        },
        country: {
          type: 'string',
          const: 'IND',
        },
        city: {
          type: 'string',
          minLength: 1,
        },
        action: {
          type: 'string',
          const: 'on_cancel',
        },
        core_version: {
          type: 'string',
          const: '1.2.0',
        },
        bap_id: {
          type: 'string',
          minLength: 1,
        },
        bap_uri: {
          type: 'string',
          format: 'url',
        },
        bpp_id: {
          type: 'string',
          minLength: 1,
        },
        bpp_uri: {
          type: 'string',
          format: 'url',
        },
        transaction_id: {
          type: 'string',
          minLength: 1,
        },
        message_id: {
          type: 'string',
          minLength: 1,
        },
        timestamp: {
          type: 'string',
          format: 'date-time',
        },
        ttl: {
          type: 'string',
          format: 'duration',
        },
      },
      required: [
        'domain',
        'country',
        'city',
        'action',
        'core_version',
        'bap_id',
        'bap_uri',
        'bpp_id',
        'bpp_uri',
        'transaction_id',
        'message_id',
        'timestamp',
        'ttl',
      ],
    },
    message: {
      type: 'object',
      properties: {
        order: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              minLength: 1,
              pattern:
                '^[a-zA-Z0-9-]{1,32}$|^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
              errorMessage: 'Order ID should be alphanumeric upto 32 letters max or UUID',
            },
            state: {
              type: 'string',
              enum: ['Cancelled'],
            },
            provider: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  minLength: 1,
                },
                locations: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        minLength: 1,
                      },
                    },
                    required: ['id'],
                  },
                },
              },
              required: ['id', 'locations'],
            },
            items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: {
                    type: 'string',
                    minLength: 1,
                  },
                  fulfillment_id: {
                    type: 'string',
                    minLength: 1,
                  },
                  quantity: {
                    type: 'object',
                    properties: {
                      count: {
                        type: 'integer',
                      },
                    },
                    required: ['count'],
                  },
                },
                required: ['id', 'fulfillment_id', 'quantity'],
              },
            },
            billing: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  minLength: 1,
                },
                address: {
                  type: 'object',
                  properties: {
                    name: {
                      type: 'string',
                      minLength: 1,
                    },
                    building: {
                      type: 'string',
                      minLength: 1,
                    },
                    locality: {
                      type: 'string',
                      minLength: 1,
                    },
                    city: {
                      type: 'string',
                      minLength: 1,
                    },
                    state: {
                      type: 'string',
                      minLength: 1,
                    },
                    country: {
                      type: 'string',
                      minLength: 1,
                    },
                    area_code: {
                      type: 'string',
                      minLength: 1,
                    },
                  },
                  required: ['name', 'building', 'locality', 'city', 'state', 'country', 'area_code'],
                },
                email: {
                  type: 'string',
                  format: 'email',
                },
                phone: {
                  type: 'string',
                  minLength: 10,
                  maxLength: 11,
                },
                created_at: {
                  type: 'string',
                  format: 'date-time',
                },
                updated_at: {
                  type: 'string',
                  format: 'date-time',
                },
              },
              required: ['name', 'address', 'phone', 'created_at', 'updated_at'],
            },
            cancellation: {
              type: 'object',
              properties: {
                cancelled_by: {
                  type: 'string',
                  minLength: 1,
                },
                reason: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      minLength: 3,
                      maxLength: 3,
                    },
                  },
                  required: ['id'],
                },
              },
              required: ['cancelled_by', 'reason'],
            },
            fulfillments: {
              type: 'array',
              minItems: 2,
              items: {
                allOf: [
                  {
                    if: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                          minLength: 1,
                        },
                        '@ondc/org/provider_name': {
                          type: 'string',
                          minLength: 1,
                        },
                        state: {
                          type: 'object',
                          properties: {
                            descriptor: {
                              type: 'object',
                              properties: {
                                code: {
                                  type: 'string',
                                  minLength: 1,
                                  const: 'Cancelled',
                                },
                              },
                              required: ['code'],
                            },
                          },
                          required: ['descriptor'],
                        },
                        type: {
                          type: 'string',
                          const: 'Delivery',
                          minLength: 1,
                        },
                        tracking: {
                          type: 'boolean',
                        },
                        start: {
                          type: 'object',
                          properties: {
                            location: {
                              type: 'object',
                              properties: {
                                id: {
                                  type: 'string',
                                },
                                descriptor: {
                                  type: 'object',
                                  properties: {
                                    name: {
                                      type: 'string',
                                    },
                                  },
                                  required: ['name'],
                                },
                                gps: {
                                  type: 'string',
                                },
                                address: {
                                  type: 'object',
                                  properties: {
                                    locality: {
                                      type: 'string',
                                      minLength: 1,
                                    },
                                    city: {
                                      type: 'string',
                                      minLength: 1,
                                    },
                                    area_code: {
                                      type: 'string',
                                      minLength: 1,
                                      maxLength: 6,
                                    },
                                    state: {
                                      type: 'string',
                                      minLength: 1,
                                    },
                                  },
                                  required: ['locality', 'city', 'area_code', 'state'],
                                },
                              },
                              required: ['id', 'descriptor', 'gps', 'address'],
                            },
                            time: {
                              type: 'object',
                              properties: {
                                range: {
                                  type: 'object',
                                  properties: {
                                    start: {
                                      type: 'string',
                                      format: 'date-time',
                                    },
                                    end: {
                                      type: 'string',
                                      format: 'date-time',
                                    },
                                  },
                                  required: ['start', 'end'],
                                },
                              },
                              required: ['range'],
                            },
                            contact: {
                              type: 'object',
                              properties: {
                                phone: {
                                  type: 'string',
                                  minLength: 10,
                                  maxLength: 11,
                                },
                                email: {
                                  type: 'string',
                                  format: 'email',
                                },
                              },
                              required: ['phone'],
                            },
                          },
                          required: ['location', 'time', 'contact'],
                        },
                        end: {
                          type: 'object',
                          properties: {
                            location: {
                              type: 'object',
                              properties: {
                                gps: {
                                  type: 'string',
                                  minLength: 1,
                                },
                                address: {
                                  type: 'object',
                                  properties: {
                                    name: {
                                      type: 'string',
                                      minLength: 1,
                                    },
                                    building: {
                                      type: 'string',
                                      minLength: 1,
                                    },
                                    locality: {
                                      type: 'string',
                                      minLength: 1,
                                    },
                                    city: {
                                      type: 'string',
                                      minLength: 1,
                                    },
                                    state: {
                                      type: 'string',
                                      minLength: 1,
                                    },
                                    country: {
                                      type: 'string',
                                      minLength: 1,
                                    },
                                    area_code: {
                                      type: 'string',
                                      minLength: 1,
                                    },
                                  },
                                  required: ['name', 'building', 'locality', 'city', 'state', 'country', 'area_code'],
                                },
                              },
                              required: ['gps', 'address'],
                            },
                            time: {
                              type: 'object',
                              properties: {
                                range: {
                                  type: 'object',
                                  properties: {
                                    start: {
                                      type: 'string',
                                      format: 'date-time',
                                    },
                                    end: {
                                      type: 'string',
                                      format: 'date-time',
                                    },
                                  },
                                  required: ['start', 'end'],
                                },
                              },
                              required: ['range'],
                            },
                            person: {
                              type: 'object',
                              properties: {
                                name: {
                                  type: 'string',
                                  minLength: 1,
                                },
                              },
                              required: ['name'],
                            },
                            contact: {
                              type: 'object',
                              properties: {
                                phone: {
                                  type: 'string',
                                  minLength: 10,
                                  maxLength: 11,
                                },
                                email: {
                                  type: 'string',
                                  format: 'email',
                                },
                              },
                              required: ['phone'],
                            },
                          },
                          required: ['location', 'time', 'person', 'contact'],
                        },
                        tags: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              allOf: [
                                {
                                  if: {
                                    properties: {
                                      code: {
                                        const: 'cancel_request',
                                      },
                                    },
                                  },
                                  then: {
                                    properties: {
                                      list: {
                                        type: 'array',
                                        items: {
                                          allOf: [
                                            {
                                              if: {
                                                properties: {
                                                  code: {
                                                    const: 'retry_count',
                                                  },
                                                },
                                                required: ['code'],
                                              },
                                              then: {
                                                properties: {
                                                  value: {
                                                    type: 'string',
                                                    pattern: '^[1-9]d*$',
                                                    errorMessage: 'Retry count must be a positive integer.',
                                                  },
                                                },
                                                required: ['value'],
                                              },
                                            },
                                            {
                                              if: {
                                                properties: {
                                                  code: {
                                                    const: 'rto_id',
                                                  },
                                                },
                                                required: ['code'],
                                              },
                                              then: {
                                                properties: {
                                                  value: {
                                                    type: 'string',
                                                  },
                                                },
                                                required: ['value'],
                                              },
                                            },
                                            {
                                              if: {
                                                properties: {
                                                  code: {
                                                    const: 'reason_id',
                                                  },
                                                },
                                                required: ['code'],
                                              },
                                              then: {
                                                properties: {
                                                  value: {
                                                    type: 'string',
                                                  },
                                                },
                                                required: ['value'],
                                              },
                                            },
                                            {
                                              if: {
                                                properties: {
                                                  code: {
                                                    const: 'initiated_by',
                                                  },
                                                },
                                                required: ['code'],
                                              },
                                              then: {
                                                properties: {
                                                  value: {
                                                    type: 'string',
                                                  },
                                                },
                                                required: ['value'],
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                                {
                                  if: {
                                    properties: {
                                      code: {
                                        const: 'igm_request',
                                      },
                                    },
                                  },
                                  then: {
                                    properties: {
                                      list: {
                                        type: 'array',
                                        minitems: 1,
                                        items: {
                                          allOf: [
                                            {
                                              if: {
                                                properties: {
                                                  code: {
                                                    const: 'id',
                                                  },
                                                },
                                                required: ['code'],
                                              },
                                              then: {
                                                properties: {
                                                  value: {
                                                    type: 'string',
                                                  },
                                                },
                                                required: ['value'],
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                                {
                                  if: {
                                    properties: {
                                      code: {
                                        const: 'precancel_state',
                                      },
                                    },
                                  },
                                  then: {
                                    properties: {
                                      list: {
                                        type: 'array',
                                        minitems: 2,
                                        items: {
                                          allOf: [
                                            {
                                              if: {
                                                properties: {
                                                  code: {
                                                    const: 'fulfillment_state',
                                                  },
                                                },
                                                required: ['code'],
                                              },
                                              then: {
                                                properties: {
                                                  value: {
                                                    type: 'string',
                                                  },
                                                },
                                                required: ['value'],
                                              },
                                            },
                                            {
                                              if: {
                                                properties: {
                                                  code: {
                                                    const: 'updated_at',
                                                  },
                                                },
                                                required: ['code'],
                                              },
                                              then: {
                                                properties: {
                                                  value: {
                                                    type: 'string',
                                                  },
                                                },
                                                required: ['value'],
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              ],
                            },
                            required: ['code', 'list'],
                          },
                          additionalProperties: false,
                        },
                      },                    
                    },
                    then:{
                      required: ['id', 'state', 'type', 'tags', 'start', 'end'],
                    }
                  },
                  {
                    if: {
                      type: 'object',
                      properties: {
                        id: {
                          type: 'string',
                          minLength: 1,
                        },
                        state: {
                          type: 'object',
                          properties: {
                            descriptor: {
                              type: 'object',
                              properties: {
                                code: {
                                  type: 'string',
                                  minLength: 1,
                                  const: 'Cancelled',
                                },
                              },
                              required: ['code'],
                            },
                          },
                          required: ['descriptor'],
                        },
                        type: {
                          type: 'string',
                          const: 'Cancel',
                          minLength: 1,
                        },
                        tags: {
                          type: 'array',
                          items: {
                            type: 'object',
                            properties: {
                              allOf: [
                                {
                                  if: {
                                    properties: {
                                      code: {
                                        const: 'quote_trail',
                                      },
                                    },
                                  },
                                  then: {
                                    properties: {
                                      list: {
                                        type: 'array',
                                        items: {
                                          allOf: [
                                            {
                                              if: {
                                                properties: {
                                                  code: {
                                                    const: 'type',
                                                  },
                                                },
                                                required: ['code'],
                                              },
                                              then: {
                                                properties: {
                                                  value: {
                                                    type: 'string',
                                                  },
                                                },
                                                required: ['value'],
                                              },
                                            },
                                            {
                                              if: {
                                                properties: {
                                                  code: {
                                                    const: 'id',
                                                  },
                                                },
                                                required: ['code'],
                                              },
                                              then: {
                                                properties: {
                                                  value: {
                                                    type: 'string',
                                                  },
                                                },
                                                required: ['value'],
                                              },
                                            },
                                            {
                                              if: {
                                                properties: {
                                                  code: {
                                                    const: 'currency',
                                                  },
                                                },
                                                required: ['code'],
                                              },
                                              then: {
                                                properties: {
                                                  value: {
                                                    type: 'string',
                                                    const: 'INR'
                                                  },
                                                },
                                                required: ['value'],
                                              },
                                            },
                                            {
                                              if: {
                                                properties: {
                                                  code: {
                                                    const: 'value',
                                                  },
                                                },
                                                required: ['code'],
                                              },
                                              then: {
                                                properties: {
                                                  value: {
                                                    type: 'string',
                                                  },
                                                },
                                                required: ['value'],
                                              },
                                            }
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              ],
                            },
                            required: ['code', 'list'],
                          },
                          additionalProperties: false,
                        },
                      },
                    },
                    then:{
                      required: ['id', 'type', 'tags','state'],
                    }
                  },
                ],
              },
            },
            quote: {
              type: 'object',
              properties: {
                price: {
                  type: 'object',
                  properties: {
                    currency: {
                      type: 'string',
                    },
                    value: {
                      type: 'string',
                    },
                  },
                  required: ['currency', 'value'],
                },
                breakup: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      '@ondc/org/item_id': {
                        type: 'string',
                      },
                      '@ondc/org/item_quantity': {
                        type: 'object',
                        properties: {
                          count: {
                            type: 'integer',
                          },
                        },
                        required: ['count'],
                      },
                      '@ondc/org/title_type': {
                        type: 'string',
                      },
                      price: {
                        type: 'object',
                        properties: {
                          currency: {
                            type: 'string',
                          },
                          value: {
                            type: 'string',
                          },
                        },
                        required: ['currency', 'value'],
                      },
                      item: {
                        type: 'object',
                        properties: {
                          price: {
                            type: 'object',
                            properties: {
                              currency: {
                                type: 'string',
                              },
                              value: {
                                type: 'string',
                              },
                            },
                            required: ['currency', 'value'],
                          },
                        },
                        required: ['price'],
                      },
                    },
                    required: ['@ondc/org/item_id', '@ondc/org/title_type', 'price'],
                  },
                },
                ttl: {
                  type: 'string',
                  format: 'duration',
                },
              },
              required: ['price', 'breakup', 'ttl'],
            },
            payment: {
              type: 'object',
              properties: {
                uri: {
                  type: 'string',
                },
                tl_method: {
                  type: 'string',
                },
                params: {
                  type: 'object',
                  properties: {
                    currency: {
                      type: 'string',
                    },
                    transaction_id: {
                      type: 'string',
                    },
                    amount: {
                      type: 'string',
                    },
                  },
                  required: ['currency', 'amount'],
                },
                status: {
                  type: 'string',
                },
                type: {
                  type: 'string',
                },
                collected_by: {
                  type: 'string',
                },
                '@ondc/org/buyer_app_finder_fee_type': {
                  type: 'string',
                },
                '@ondc/org/buyer_app_finder_fee_amount': {
                  type: 'string',
                },
                '@ondc/org/settlement_details': {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      settlement_counterparty: {
                        type: 'string',
                      },
                      settlement_phase: {
                        type: 'string',
                      },
                      beneficiary_name: {
                        type: 'string',
                      },
                      settlement_type: {
                        type: 'string',
                      },
                      upi_address: {
                        type: 'string',
                      },
                      settlement_bank_account_no: {
                        type: 'string',
                      },
                      settlement_ifsc_code: {
                        type: 'string',
                      },
                      bank_name: {
                        type: 'string',
                      },
                      branch_name: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
              required: [
                'params',
                'status',
                'type',
                'collected_by',
                '@ondc/org/buyer_app_finder_fee_type',
                '@ondc/org/buyer_app_finder_fee_amount',
                '@ondc/org/settlement_details',
              ],
            },
            created_at: {
              type: 'string',
              format: 'date-time',
            },
            updated_at: {
              type: 'string',
              format: 'date-time',
            },
          },
          required: [
            'id',
            'state',
            'provider',
            'items',
            'billing',
            'cancellation',
            'fulfillments',
            'quote',
            'payment',
            'created_at',
            'updated_at',
          ],
          additionalProperties: false,
        },
      },
      required: ['order'],
    },
  },
  required: ['context', 'message'],
}
