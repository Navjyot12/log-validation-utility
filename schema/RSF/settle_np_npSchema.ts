const settlementSchema = {
    type: 'object',
    required: ['context', 'message'],
    properties: {
      context: {
        type: 'object',
        required: [
          'domain',
          'location',
          'version',
          'action',
          'bap_id',
          'bap_uri',
          'bpp_id',
          'bpp_uri',
          'transaction_id',
          'message_id',
          'timestamp',
          'ttl',
        ],
        properties: {
          domain: {
            type: 'string',
          },
          location: {
            type: 'object',
            required: ['country', 'city'],
            properties: {
              country: {
                type: 'object',
                required: ['code'],
                properties: {
                  code: {
                    type: 'string',
                  },
                },
              },
              city: {
                type: 'object',
                required: ['code'],
                properties: {
                  code: {
                    type: 'string',
                  },
                },
              },
            },
          },
          version: {
            type: 'string',
          },
          action: {
            type: 'string',
          },
          bap_id: {
            type: 'string',
          },
          bap_uri: {
            type: 'string',
          },
          bpp_id: {
            type: 'string',
          },
          bpp_uri: {
            type: 'string',
          },
          transaction_id: {
            type: 'string',
          },
          message_id: {
            type: 'string',
          },
          timestamp: {
            type: 'string',
          },
          ttl: {
            type: 'string',
          },
        },
      },
      message: {
        type: 'object',
        required: ['collector_app_id', 'receiver_app_id', 'settlement'],
        properties: {
          collector_app_id: {
            type: 'string',
          },
          receiver_app_id: {
            type: 'string',
          },
          settlement: {
            type: 'object',
            required: ['type', 'id', 'orders'],
            properties: {
              type: {
                type: 'string',
              },
              id: {
                type: 'string',
              },
              orders: {
                type: 'array',
                items: {
                  type: 'object',
                  required: ['id', 'inter_participant', 'collector', 'self'],
                  properties: {
                    id: {
                      type: 'string',
                    },
                    inter_participant: {
                      type: 'object',
                      required: ['amount'],
                      properties: {
                        amount: {
                          type: 'object',
                          required: ['currency', 'value'],
                          properties: {
                            currency: {
                              type: 'string',
                            },
                            value: {
                              type: 'string',
                            },
                          },
                        },
                      },
                    },
                    collector: {
                      type: 'object',
                      required: ['amount'],
                      properties: {
                        amount: {
                          type: 'object',
                          required: ['currency', 'value'],
                          properties: {
                            currency: {
                              type: 'string',
                            },
                            value: {
                              type: 'string',
                            },
                          },
                        },
                      },
                    },
                    self: {
                      type: 'object',
                      required: ['amount'],
                      properties: {
                        amount: {
                          type: 'object',
                          required: ['currency', 'value'],
                          properties: {
                            currency: {
                              type: 'string',
                            },
                            value: {
                              type: 'string',
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  };
  
  export default settlementSchema;
  