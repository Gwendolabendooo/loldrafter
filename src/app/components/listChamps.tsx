'use client';

import React, { useState, useEffect, useContext } from 'react';

import Image from 'next/image';

const allInfos = [
        {
            id: 86,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.52567,
                pick_rate: 0.120603,
                ban_rate: 0.0743051,
                kda: 2.154528,
                tier: 2,
                rank: 9,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.52505,
                        pick_rate: 0.113297,
                        role_rate: 0.936326,
                        ban_rate: 0.0695738,
                        kda: 2.135177,
                        tier_data: {
                            tier: 1,
                            rank: 2,
                            rank_prev: 2,
                            rank_prev_patch: 2,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.525019,
                                role_rate: 0.653245,
                                play: 36033,
                                win: 18918,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.499003,
                                role_rate: 0.227393,
                                play: 12543,
                                win: 6259,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.578555,
                                role_rate: 0.119199,
                                play: 6575,
                                win: 3804,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 4,
                            play: 400,
                            win: 179,
                        },
                        {
                            champion_id: 67,
                            play: 611,
                            win: 280,
                        },
                        {
                            champion_id: 164,
                            play: 1261,
                            win: 578,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 3,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.501266,
                pick_rate: 0.0313004,
                ban_rate: 0.00711032,
                kda: 2.580045,
                tier: 5,
                rank: 115,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.505099,
                        pick_rate: 0.0248305,
                        role_rate: 0.795754,
                        ban_rate: 0.00565806,
                        kda: 2.641709,
                        tier_data: {
                            tier: 3,
                            rank: 31,
                            rank_prev: 32,
                            rank_prev_patch: 39,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.510338,
                                role_rate: 0.907655,
                                play: 10979,
                                win: 5603,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.466428,
                                role_rate: 0.0923446,
                                play: 1117,
                                win: 521,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 34,
                            play: 125,
                            win: 50,
                        },
                        {
                            champion_id: 950,
                            play: 111,
                            win: 45,
                        },
                        {
                            champion_id: 79,
                            play: 96,
                            win: 41,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 41,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.498751,
                pick_rate: 0.0276609,
                ban_rate: 0.00737185,
                kda: 2.020404,
                tier: 5,
                rank: 129,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.496097,
                        pick_rate: 0.0224637,
                        role_rate: 0.809433,
                        ban_rate: 0.00596702,
                        kda: 1.975799,
                        tier_data: {
                            tier: 4,
                            rank: 40,
                            rank_prev: 39,
                            rank_prev_patch: 42,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.499473,
                                role_rate: 0.952168,
                                play: 10431,
                                win: 5210,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.434343,
                                role_rate: 0.0361479,
                                play: 396,
                                win: 172,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 69,
                            play: 34,
                            win: 10,
                        },
                        {
                            champion_id: 950,
                            play: 32,
                            win: 11,
                        },
                        {
                            champion_id: 166,
                            play: 81,
                            win: 32,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 79,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.506165,
                pick_rate: 0.0711966,
                ban_rate: 0.0149674,
                kda: 2.41352,
                tier: 3,
                rank: 56,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.511675,
                        pick_rate: 0.0272427,
                        role_rate: 0.381379,
                        ban_rate: 0.00570827,
                        kda: 2.216512,
                        tier_data: {
                            tier: 4,
                            rank: 22,
                            rank_prev: 22,
                            rank_prev_patch: 31,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.514027,
                                role_rate: 0.96501,
                                play: 12797,
                                win: 6578,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.482759,
                                role_rate: 0.0349898,
                                play: 464,
                                win: 224,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 27,
                            play: 106,
                            win: 40,
                        },
                        {
                            champion_id: 4,
                            play: 108,
                            win: 44,
                        },
                        {
                            champion_id: 36,
                            play: 127,
                            win: 52,
                        },
                    ],
                },
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.494088,
                        pick_rate: 0.0243012,
                        role_rate: 0.340364,
                        ban_rate: 0.00509438,
                        kda: 2.618627,
                        tier_data: {
                            tier: 4,
                            rank: 36,
                            rank_prev: 36,
                            rank_prev_patch: 33,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.495906,
                                role_rate: 0.9877,
                                play: 11724,
                                win: 5814,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 28,
                            play: 421,
                            win: 176,
                        },
                        {
                            champion_id: 63,
                            play: 528,
                            win: 232,
                        },
                        {
                            champion_id: 32,
                            play: 133,
                            win: 59,
                        },
                    ],
                },
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.514775,
                        pick_rate: 0.0171385,
                        role_rate: 0.241466,
                        ban_rate: 0.00361412,
                        kda: 2.449908,
                        tier_data: {
                            tier: 3,
                            rank: 30,
                            rank_prev: 30,
                            rank_prev_patch: 18,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.515282,
                                role_rate: 0.996906,
                                play: 8376,
                                win: 4316,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 80,
                            play: 32,
                            win: 13,
                        },
                        {
                            champion_id: 136,
                            play: 235,
                            win: 100,
                        },
                        {
                            champion_id: 245,
                            play: 160,
                            win: 69,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 104,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.489343,
                pick_rate: 0.0610199,
                ban_rate: 0.0293189,
                kda: 2.437184,
                tier: 4,
                rank: 108,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.489188,
                        pick_rate: 0.0579582,
                        role_rate: 0.947149,
                        ban_rate: 0.0277694,
                        kda: 2.475358,
                        tier_data: {
                            tier: 3,
                            rank: 23,
                            rank_prev: 23,
                            rank_prev_patch: 14,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.513113,
                                role_rate: 0.530442,
                                play: 14985,
                                win: 7689,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.462267,
                                role_rate: 0.302549,
                                play: 8547,
                                win: 3951,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.465771,
                                role_rate: 0.163398,
                                play: 4616,
                                win: 2150,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 28,
                            play: 971,
                            win: 418,
                        },
                        {
                            champion_id: 163,
                            play: 312,
                            win: 141,
                        },
                        {
                            champion_id: 254,
                            play: 841,
                            win: 382,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 887,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.514776,
                pick_rate: 0.039057,
                ban_rate: 0.0289605,
                kda: 1.804172,
                tier: 4,
                rank: 68,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.514141,
                        pick_rate: 0.0310696,
                        role_rate: 0.792872,
                        ban_rate: 0.0229619,
                        kda: 1.698392,
                        tier_data: {
                            tier: 3,
                            rank: 18,
                            rank_prev: 18,
                            rank_prev_patch: 32,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.515592,
                                role_rate: 0.996167,
                                play: 15072,
                                win: 7771,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 69,
                            play: 57,
                            win: 21,
                        },
                        {
                            champion_id: 67,
                            play: 66,
                            win: 26,
                        },
                        {
                            champion_id: 10,
                            play: 187,
                            win: 80,
                        },
                    ],
                },
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.519224,
                        pick_rate: 0.00588324,
                        role_rate: 0.150208,
                        ban_rate: 0.0043501,
                        kda: 2.365766,
                        tier_data: {
                            tier: 4,
                            rank: 38,
                            rank_prev: 38,
                            rank_prev_patch: 43,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.518389,
                                role_rate: 1,
                                play: 2855,
                                win: 1480,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 11,
                            play: 68,
                            win: 29,
                        },
                        {
                            champion_id: 28,
                            play: 102,
                            win: 44,
                        },
                        {
                            champion_id: 35,
                            play: 74,
                            win: 32,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 150,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.49528,
                pick_rate: 0.0262629,
                ban_rate: 0.00386952,
                kda: 1.984182,
                tier: 5,
                rank: 138,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.497385,
                        pick_rate: 0.0253364,
                        role_rate: 0.961544,
                        ban_rate: 0.00372072,
                        kda: 1.987031,
                        tier_data: {
                            tier: 4,
                            rank: 34,
                            rank_prev: 34,
                            rank_prev_patch: 37,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.502794,
                                role_rate: 0.882377,
                                play: 10915,
                                win: 5488,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.456276,
                                role_rate: 0.114632,
                                play: 1418,
                                win: 647,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 133,
                            play: 79,
                            win: 31,
                        },
                        {
                            champion_id: 62,
                            play: 71,
                            win: 28,
                        },
                        {
                            champion_id: 10,
                            play: 138,
                            win: 57,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 267,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.503154,
                pick_rate: 0.0731251,
                ban_rate: 0.00278072,
                kda: 3.275047,
                tier: 4,
                rank: 60,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.503409,
                        pick_rate: 0.0734199,
                        role_rate: 0.998555,
                        ban_rate: 0.00277671,
                        kda: 3.27626,
                        tier_data: {
                            tier: 4,
                            rank: 11,
                            rank_prev: 11,
                            rank_prev_patch: 12,
                        },
                    },
                    roles: [
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.50442,
                                role_rate: 0.961826,
                                play: 34392,
                                win: 17348,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.497259,
                                role_rate: 0.0357133,
                                play: 1277,
                                win: 635,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 57,
                            play: 2386,
                            win: 1065,
                        },
                        {
                            champion_id: 143,
                            play: 1499,
                            win: 687,
                        },
                        {
                            champion_id: 89,
                            play: 771,
                            win: 360,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 75,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.500922,
                pick_rate: 0.0275492,
                ban_rate: 0.0182978,
                kda: 1.937774,
                tier: 5,
                rank: 121,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.505417,
                        pick_rate: 0.022582,
                        role_rate: 0.816995,
                        ban_rate: 0.0149492,
                        kda: 1.872013,
                        tier_data: {
                            tier: 4,
                            rank: 30,
                            rank_prev: 30,
                            rank_prev_patch: 33,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.504886,
                                role_rate: 0.763812,
                                play: 8392,
                                win: 4237,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.50841,
                                role_rate: 0.216438,
                                play: 2378,
                                win: 1209,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.483871,
                                role_rate: 0.0197506,
                                play: 217,
                                win: 105,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 240,
                            play: 86,
                            win: 34,
                        },
                        {
                            champion_id: 98,
                            play: 186,
                            win: 76,
                        },
                        {
                            champion_id: 875,
                            play: 144,
                            win: 59,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 950,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.520018,
                pick_rate: 0.0275106,
                ban_rate: 0.0164883,
                kda: 2.173483,
                tier: 4,
                rank: 77,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.52621,
                        pick_rate: 0.0201347,
                        role_rate: 0.734156,
                        ban_rate: 0.0121049,
                        kda: 2.235721,
                        tier_data: {
                            tier: 3,
                            rank: 16,
                            rank_prev: 17,
                            rank_prev_patch: 12,
                        },
                    },
                    roles: [
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.538033,
                                role_rate: 0.820229,
                                play: 8085,
                                win: 4350,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.472912,
                                role_rate: 0.179771,
                                play: 1772,
                                win: 838,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 112,
                            play: 123,
                            win: 53,
                        },
                        {
                            champion_id: 8,
                            play: 179,
                            win: 78,
                        },
                        {
                            champion_id: 127,
                            play: 138,
                            win: 62,
                        },
                    ],
                },
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.514908,
                        pick_rate: 0.00608588,
                        role_rate: 0.22049,
                        ban_rate: 0.0036355,
                        kda: 1.98437,
                        tier_data: {
                            tier: 5,
                            rank: 49,
                            rank_prev: 49,
                            rank_prev_patch: null,
                        },
                    },
                    roles: [
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.556609,
                                role_rate: 0.641988,
                                play: 1899,
                                win: 1057,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.442105,
                                role_rate: 0.353279,
                                play: 1045,
                                win: 462,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 887,
                            play: 39,
                            win: 16,
                        },
                        {
                            champion_id: 6,
                            play: 48,
                            win: 20,
                        },
                        {
                            champion_id: 54,
                            play: 101,
                            win: 43,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 111,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.486336,
                pick_rate: 0.079193,
                ban_rate: 0.0863908,
                kda: 2.428921,
                tier: 4,
                rank: 100,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.486543,
                        pick_rate: 0.0771325,
                        role_rate: 0.968669,
                        ban_rate: 0.0836841,
                        kda: 2.433098,
                        tier_data: {
                            tier: 4,
                            rank: 16,
                            rank_prev: 16,
                            rank_prev_patch: 18,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.48401,
                                role_rate: 0.534323,
                                play: 19981,
                                win: 9671,
                            },
                        },
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.490065,
                                role_rate: 0.465677,
                                play: 17414,
                                win: 8534,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 44,
                            play: 343,
                            win: 140,
                        },
                        {
                            champion_id: 57,
                            play: 2733,
                            win: 1211,
                        },
                        {
                            champion_id: 888,
                            play: 523,
                            win: 232,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 56,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.520783,
                pick_rate: 0.101491,
                ban_rate: 0.25145,
                kda: 2.63289,
                tier: 2,
                rank: 14,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.520902,
                        pick_rate: 0.100808,
                        role_rate: 0.990469,
                        ban_rate: 0.249054,
                        kda: 2.640893,
                        tier_data: {
                            tier: 1,
                            rank: 2,
                            rank_prev: 2,
                            rank_prev_patch: 5,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.519942,
                                role_rate: 0.874148,
                                play: 43099,
                                win: 22409,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.544878,
                                role_rate: 0.102365,
                                play: 5047,
                                win: 2750,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.44533,
                                role_rate: 0.0178079,
                                play: 878,
                                win: 391,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 57,
                            play: 349,
                            win: 166,
                        },
                        {
                            champion_id: 24,
                            play: 876,
                            win: 419,
                        },
                        {
                            champion_id: 887,
                            play: 131,
                            win: 63,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 20,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.485582,
                pick_rate: 0.0317129,
                ban_rate: 0.00401177,
                kda: 2.513422,
                tier: 5,
                rank: 152,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.50007,
                        pick_rate: 0.0292348,
                        role_rate: 0.919262,
                        ban_rate: 0.00368787,
                        kda: 2.624199,
                        tier_data: {
                            tier: 3,
                            rank: 28,
                            rank_prev: 29,
                            rank_prev_patch: 23,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.51664,
                                role_rate: 0.520967,
                                play: 7392,
                                win: 3819,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.484004,
                                role_rate: 0.478046,
                                play: 6783,
                                win: 3283,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 60,
                            play: 107,
                            win: 46,
                        },
                        {
                            champion_id: 200,
                            play: 429,
                            win: 191,
                        },
                        {
                            champion_id: 421,
                            play: 65,
                            win: 29,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 76,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.495034,
                pick_rate: 0.0388741,
                ban_rate: 0.00946511,
                kda: 2.738328,
                tier: 5,
                rank: 119,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.499785,
                        pick_rate: 0.0332066,
                        role_rate: 0.851803,
                        ban_rate: 0.00806242,
                        kda: 2.831051,
                        tier_data: {
                            tier: 3,
                            rank: 24,
                            rank_prev: 24,
                            rank_prev_patch: 38,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.501617,
                                role_rate: 1,
                                play: 16084,
                                win: 8068,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 17,
                            play: 36,
                            win: 16,
                        },
                        {
                            champion_id: 113,
                            play: 99,
                            win: 44,
                        },
                        {
                            champion_id: 62,
                            play: 156,
                            win: 70,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 518,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.494784,
                pick_rate: 0.04305,
                ban_rate: 0.019119,
                kda: 2.400235,
                tier: 5,
                rank: 113,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.497038,
                        pick_rate: 0.0225677,
                        role_rate: 0.525844,
                        ban_rate: 0.0100536,
                        kda: 2.566745,
                        tier_data: {
                            tier: 4,
                            rank: 42,
                            rank_prev: 42,
                            rank_prev_patch: 30,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.497733,
                                role_rate: 0.998641,
                                play: 11026,
                                win: 5488,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 79,
                            play: 86,
                            win: 31,
                        },
                        {
                            champion_id: 39,
                            play: 120,
                            win: 46,
                        },
                        {
                            champion_id: 43,
                            play: 212,
                            win: 85,
                        },
                    ],
                },
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.491799,
                        pick_rate: 0.0169426,
                        role_rate: 0.391409,
                        ban_rate: 0.00748335,
                        kda: 2.234685,
                        tier_data: {
                            tier: 5,
                            rank: 35,
                            rank_prev: 35,
                            rank_prev_patch: 33,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.492816,
                                role_rate: 0.995112,
                                play: 8143,
                                win: 4013,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 63,
                            play: 136,
                            win: 53,
                        },
                        {
                            champion_id: 526,
                            play: 89,
                            win: 35,
                        },
                        {
                            champion_id: 57,
                            play: 572,
                            win: 235,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 895,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.515798,
                pick_rate: 0.024182,
                ban_rate: 0.0321941,
                kda: 2.104701,
                tier: 4,
                rank: 94,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.519351,
                        pick_rate: 0.0231164,
                        role_rate: 0.964034,
                        ban_rate: 0.0310362,
                        kda: 2.121783,
                        tier_data: {
                            tier: 3,
                            rank: 15,
                            rank_prev: 14,
                            rank_prev_patch: 14,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.521704,
                                role_rate: 0.995053,
                                play: 11265,
                                win: 5877,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 147,
                            play: 183,
                            win: 83,
                        },
                        {
                            champion_id: 15,
                            play: 96,
                            win: 44,
                        },
                        {
                            champion_id: 30,
                            play: 41,
                            win: 19,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 122,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.507612,
                pick_rate: 0.103184,
                ban_rate: 0.191008,
                kda: 1.824424,
                tier: 3,
                rank: 26,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.507201,
                        pick_rate: 0.098106,
                        role_rate: 0.947653,
                        ban_rate: 0.181009,
                        kda: 1.815016,
                        tier_data: {
                            tier: 2,
                            rank: 6,
                            rank_prev: 6,
                            rank_prev_patch: 3,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.500875,
                                role_rate: 0.71552,
                                play: 34282,
                                win: 17171,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.525736,
                                role_rate: 0.280201,
                                play: 13425,
                                win: 7058,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 4,
                            play: 328,
                            win: 139,
                        },
                        {
                            champion_id: 50,
                            play: 100,
                            win: 43,
                        },
                        {
                            champion_id: 83,
                            play: 1025,
                            win: 456,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 131,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.496155,
                pick_rate: 0.0689634,
                ban_rate: 0.022686,
                kda: 2.129715,
                tier: 4,
                rank: 84,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.513669,
                        pick_rate: 0.0337158,
                        role_rate: 0.490409,
                        ban_rate: 0.0111254,
                        kda: 2.107548,
                        tier_data: {
                            tier: 3,
                            rank: 15,
                            rank_prev: 15,
                            rank_prev_patch: 10,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.514423,
                                role_rate: 0.995286,
                                play: 16467,
                                win: 8471,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 85,
                            play: 30,
                            win: 11,
                        },
                        {
                            champion_id: 50,
                            play: 118,
                            win: 46,
                        },
                        {
                            champion_id: 34,
                            play: 187,
                            win: 79,
                        },
                    ],
                },
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.47951,
                        pick_rate: 0.0339137,
                        role_rate: 0.490379,
                        ban_rate: 0.0111247,
                        kda: 2.16676,
                        tier_data: {
                            tier: 4,
                            rank: 42,
                            rank_prev: 42,
                            rank_prev_patch: 34,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.479998,
                                role_rate: 0.969739,
                                play: 16023,
                                win: 7691,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.464,
                                role_rate: 0.0302608,
                                play: 500,
                                win: 232,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 887,
                            play: 41,
                            win: 14,
                        },
                        {
                            champion_id: 17,
                            play: 49,
                            win: 19,
                        },
                        {
                            champion_id: 200,
                            play: 452,
                            win: 187,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 119,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.499057,
                pick_rate: 0.0668236,
                ban_rate: 0.308654,
                kda: 2.014839,
                tier: 4,
                rank: 63,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.500031,
                        pick_rate: 0.0651338,
                        role_rate: 0.98297,
                        ban_rate: 0.303398,
                        kda: 2.025041,
                        tier_data: {
                            tier: 3,
                            rank: 11,
                            rank_prev: 11,
                            rank_prev_patch: 12,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.502524,
                                role_rate: 0.773636,
                                play: 24761,
                                win: 12443,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.503191,
                                role_rate: 0.215397,
                                play: 6894,
                                win: 3469,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.432432,
                                role_rate: 0.0104043,
                                play: 333,
                                win: 144,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 96,
                            play: 118,
                            win: 51,
                        },
                        {
                            champion_id: 50,
                            play: 99,
                            win: 43,
                        },
                        {
                            champion_id: 30,
                            play: 98,
                            win: 44,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 13,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.505435,
                pick_rate: 0.0162629,
                ban_rate: 0.000847792,
                kda: 2.199914,
                tier: 5,
                rank: 139,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.506632,
                        pick_rate: 0.0125237,
                        role_rate: 0.77246,
                        ban_rate: 0.000654886,
                        kda: 2.281108,
                        tier_data: {
                            tier: 4,
                            rank: 45,
                            rank_prev: 45,
                            rank_prev_patch: 51,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.50789,
                                role_rate: 1,
                                play: 6084,
                                win: 3090,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.412698,
                                role_rate: 0.0103584,
                                play: 63,
                                win: 26,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 90,
                            play: 72,
                            win: 24,
                        },
                        {
                            champion_id: 39,
                            play: 65,
                            win: 27,
                        },
                        {
                            champion_id: 79,
                            play: 47,
                            win: 20,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 497,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.507836,
                pick_rate: 0.0593861,
                ban_rate: 0.0111396,
                kda: 3.084202,
                tier: 4,
                rank: 59,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.507476,
                        pick_rate: 0.0593113,
                        role_rate: 0.993293,
                        ban_rate: 0.0110649,
                        kda: 3.08263,
                        tier_data: {
                            tier: 4,
                            rank: 12,
                            rank_prev: 12,
                            rank_prev_patch: 11,
                        },
                    },
                    roles: [
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.510487,
                                role_rate: 0.637825,
                                play: 18451,
                                win: 9419,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.505588,
                                role_rate: 0.349523,
                                play: 10111,
                                win: 5112,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 37,
                            play: 358,
                            win: 150,
                        },
                        {
                            champion_id: 164,
                            play: 108,
                            win: 46,
                        },
                        {
                            champion_id: 26,
                            play: 335,
                            win: 145,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 33,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.498394,
                pick_rate: 0.0259316,
                ban_rate: 0.0581487,
                kda: 2.835736,
                tier: 5,
                rank: 132,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.502696,
                        pick_rate: 0.0230541,
                        role_rate: 0.886529,
                        ban_rate: 0.0515505,
                        kda: 3.053877,
                        tier_data: {
                            tier: 3,
                            rank: 31,
                            rank_prev: 31,
                            rank_prev_patch: 19,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.503301,
                                role_rate: 0.996267,
                                play: 11208,
                                win: 5641,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 9,
                            play: 104,
                            win: 41,
                        },
                        {
                            champion_id: 91,
                            play: 76,
                            win: 31,
                        },
                        {
                            champion_id: 876,
                            play: 294,
                            win: 121,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 99,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.492996,
                pick_rate: 0.102991,
                ban_rate: 0.0258286,
                kda: 2.66909,
                tier: 4,
                rank: 67,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.484394,
                        pick_rate: 0.0619267,
                        role_rate: 0.598003,
                        ban_rate: 0.0154456,
                        kda: 2.515513,
                        tier_data: {
                            tier: 4,
                            rank: 21,
                            rank_prev: 21,
                            rank_prev_patch: 17,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.484526,
                                role_rate: 0.979904,
                                play: 29598,
                                win: 14341,
                            },
                        },
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.498069,
                                role_rate: 0.0171495,
                                play: 518,
                                win: 258,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 44,
                            play: 140,
                            win: 59,
                        },
                        {
                            champion_id: 37,
                            play: 383,
                            win: 165,
                        },
                        {
                            champion_id: 57,
                            play: 1803,
                            win: 796,
                        },
                    ],
                },
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.504487,
                        pick_rate: 0.0376986,
                        role_rate: 0.367172,
                        ban_rate: 0.00948353,
                        kda: 2.973272,
                        tier_data: {
                            tier: 3,
                            rank: 21,
                            rank_prev: 21,
                            rank_prev_patch: 25,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.50465,
                                role_rate: 0.998219,
                                play: 18494,
                                win: 9333,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 29,
                            play: 48,
                            win: 18,
                        },
                        {
                            champion_id: 50,
                            play: 103,
                            win: 40,
                        },
                        {
                            champion_id: 950,
                            play: 166,
                            win: 69,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 68,
            is_rotation: true,
            is_rip: false,
            average_stats: {
                win_rate: 0.48589,
                pick_rate: 0.0306766,
                ban_rate: 0.0141463,
                kda: 2.115896,
                tier: 5,
                rank: 154,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.474772,
                        pick_rate: 0.0212139,
                        role_rate: 0.689255,
                        ban_rate: 0.00975038,
                        kda: 1.957652,
                        tier_data: {
                            tier: 5,
                            rank: 54,
                            rank_prev: 54,
                            rank_prev_patch: 49,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.474481,
                                role_rate: 1,
                                play: 10306,
                                win: 4890,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 166,
                            play: 53,
                            win: 18,
                        },
                        {
                            champion_id: 19,
                            play: 74,
                            win: 27,
                        },
                        {
                            champion_id: 2,
                            play: 87,
                            win: 32,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 888,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.504794,
                pick_rate: 0.0235256,
                ban_rate: 0.00362933,
                kda: 2.830689,
                tier: 5,
                rank: 120,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.505148,
                        pick_rate: 0.0236138,
                        role_rate: 0.998272,
                        ban_rate: 0.00362306,
                        kda: 2.831928,
                        tier_data: {
                            tier: 4,
                            rank: 26,
                            rank_prev: 26,
                            rank_prev_patch: 28,
                        },
                    },
                    roles: [
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.508081,
                                role_rate: 0.965142,
                                play: 11075,
                                win: 5627,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.47482,
                                role_rate: 0.0242266,
                                play: 278,
                                win: 132,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.368852,
                                role_rate: 0.0106318,
                                play: 122,
                                win: 45,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 101,
                            play: 122,
                            win: 48,
                        },
                        {
                            champion_id: 910,
                            play: 130,
                            win: 55,
                        },
                        {
                            champion_id: 161,
                            play: 87,
                            win: 38,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 58,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.466193,
                pick_rate: 0.0245843,
                ban_rate: 0.0217183,
                kda: 1.749904,
                tier: 5,
                rank: 166,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.466124,
                        pick_rate: 0.0228103,
                        role_rate: 0.924781,
                        ban_rate: 0.0200846,
                        kda: 1.733963,
                        tier_data: {
                            tier: 5,
                            rank: 56,
                            rank_prev: 56,
                            rank_prev_patch: 56,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.467487,
                                role_rate: 0.968511,
                                play: 10642,
                                win: 4975,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.428105,
                                role_rate: 0.0278486,
                                play: 306,
                                win: 131,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.559211,
                                role_rate: 0.0137769,
                                play: 152,
                                win: 85,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 4,
                            play: 93,
                            win: 31,
                        },
                        {
                            champion_id: 43,
                            play: 51,
                            win: 17,
                        },
                        {
                            champion_id: 420,
                            play: 310,
                            win: 107,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 89,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.518563,
                pick_rate: 0.0556104,
                ban_rate: 0.0262881,
                kda: 2.63735,
                tier: 3,
                rank: 35,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.519016,
                        pick_rate: 0.055658,
                        role_rate: 0.995396,
                        ban_rate: 0.026167,
                        kda: 2.639479,
                        tier_data: {
                            tier: 3,
                            rank: 8,
                            rank_prev: 8,
                            rank_prev_patch: 8,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.52914,
                                role_rate: 0.631163,
                                play: 17090,
                                win: 9043,
                            },
                        },
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.502625,
                                role_rate: 0.365772,
                                play: 9904,
                                win: 4978,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 40,
                            play: 1392,
                            win: 620,
                        },
                        {
                            champion_id: 223,
                            play: 134,
                            win: 61,
                        },
                        {
                            champion_id: 26,
                            play: 274,
                            win: 126,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 421,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.511692,
                pick_rate: 0.010254,
                ban_rate: 0.00273744,
                kda: 2.578353,
                tier: 5,
                rank: 148,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.514185,
                        pick_rate: 0.00984072,
                        role_rate: 0.956996,
                        ban_rate: 0.00261972,
                        kda: 2.613969,
                        tier_data: {
                            tier: 4,
                            rank: 33,
                            rank_prev: 33,
                            rank_prev_patch: 39,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.518852,
                                role_rate: 0.894759,
                                play: 4217,
                                win: 2188,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.506048,
                                role_rate: 0.105241,
                                play: 496,
                                win: 251,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.461538,
                                role_rate: 0.0136785,
                                play: 65,
                                win: 30,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 57,
                            play: 33,
                            win: 11,
                        },
                        {
                            champion_id: 30,
                            play: 45,
                            win: 17,
                        },
                        {
                            champion_id: 203,
                            play: 82,
                            win: 31,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 526,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.487435,
                pick_rate: 0.0310505,
                ban_rate: 0.0078374,
                kda: 2.827477,
                tier: 5,
                rank: 150,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.493352,
                        pick_rate: 0.0252014,
                        role_rate: 0.807199,
                        ban_rate: 0.00632634,
                        kda: 2.777513,
                        tier_data: {
                            tier: 5,
                            rank: 30,
                            rank_prev: 30,
                            rank_prev_patch: 24,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.500077,
                                role_rate: 0.533677,
                                play: 6529,
                                win: 3265,
                            },
                        },
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.487642,
                                role_rate: 0.466323,
                                play: 5705,
                                win: 2782,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 44,
                            play: 95,
                            win: 37,
                        },
                        {
                            champion_id: 267,
                            play: 370,
                            win: 153,
                        },
                        {
                            champion_id: 80,
                            play: 114,
                            win: 49,
                        },
                    ],
                },
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.463964,
                        pick_rate: 0.0058812,
                        role_rate: 0.188874,
                        ban_rate: 0.00148028,
                        kda: 3.098715,
                        tier_data: {
                            tier: 5,
                            rank: 47,
                            rank_prev: 47,
                            rank_prev_patch: 47,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.461676,
                                role_rate: 1,
                                play: 2792,
                                win: 1289,
                            },
                        },
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.569444,
                                role_rate: 0.0253165,
                                play: 72,
                                win: 41,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 79,
                            play: 43,
                            win: 15,
                        },
                        {
                            champion_id: 56,
                            play: 109,
                            win: 39,
                        },
                        {
                            champion_id: 102,
                            play: 46,
                            win: 17,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 107,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.49998,
                pick_rate: 0.0507029,
                ban_rate: 0.215181,
                kda: 2.156506,
                tier: 4,
                rank: 85,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.500331,
                        pick_rate: 0.0461754,
                        role_rate: 0.90814,
                        ban_rate: 0.195414,
                        kda: 2.191086,
                        tier_data: {
                            tier: 3,
                            rank: 17,
                            rank_prev: 17,
                            rank_prev_patch: 7,
                        },
                    },
                    roles: [
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.503446,
                                role_rate: 0.952528,
                                play: 21329,
                                win: 10738,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.44,
                                role_rate: 0.0279118,
                                play: 625,
                                win: 275,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.5,
                                role_rate: 0.0195606,
                                play: 438,
                                win: 219,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 17,
                            play: 46,
                            win: 19,
                        },
                        {
                            champion_id: 421,
                            play: 132,
                            win: 56,
                        },
                        {
                            champion_id: 5,
                            play: 881,
                            win: 387,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 236,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.4939,
                pick_rate: 0.0990994,
                ban_rate: 0.0280499,
                kda: 2.199055,
                tier: 4,
                rank: 65,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.495338,
                        pick_rate: 0.0922702,
                        role_rate: 0.938975,
                        ban_rate: 0.0263381,
                        kda: 2.228293,
                        tier_data: {
                            tier: 3,
                            rank: 13,
                            rank_prev: 13,
                            rank_prev_patch: 15,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.495902,
                                role_rate: 0.988893,
                                play: 45140,
                                win: 22385,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 147,
                            play: 701,
                            win: 298,
                        },
                        {
                            champion_id: 22,
                            play: 1402,
                            win: 642,
                        },
                        {
                            champion_id: 221,
                            play: 677,
                            win: 311,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 117,
            is_rotation: true,
            is_rip: false,
            average_stats: {
                win_rate: 0.482433,
                pick_rate: 0.0417007,
                ban_rate: 0.0224618,
                kda: 3.103643,
                tier: 5,
                rank: 143,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.483088,
                        pick_rate: 0.0414411,
                        role_rate: 0.988353,
                        ban_rate: 0.0222002,
                        kda: 3.108409,
                        tier_data: {
                            tier: 5,
                            rank: 27,
                            rank_prev: 27,
                            rank_prev_patch: 29,
                        },
                    },
                    roles: [
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.484602,
                                role_rate: 0.988253,
                                play: 19938,
                                win: 9662,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 164,
                            play: 91,
                            win: 38,
                        },
                        {
                            champion_id: 35,
                            play: 151,
                            win: 64,
                        },
                        {
                            champion_id: 80,
                            play: 171,
                            win: 74,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 7,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.477484,
                pick_rate: 0.0326254,
                ban_rate: 0.044591,
                kda: 2.772826,
                tier: 5,
                rank: 161,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.481141,
                        pick_rate: 0.0291111,
                        role_rate: 0.895048,
                        ban_rate: 0.0399111,
                        kda: 2.814873,
                        tier_data: {
                            tier: 4,
                            rank: 47,
                            rank_prev: 47,
                            rank_prev_patch: 47,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.484926,
                                role_rate: 0.905783,
                                play: 12969,
                                win: 6289,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.448687,
                                role_rate: 0.0877916,
                                play: 1257,
                                win: 564,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 29,
                            play: 51,
                            win: 20,
                        },
                        {
                            champion_id: 13,
                            play: 73,
                            win: 29,
                        },
                        {
                            champion_id: 127,
                            play: 199,
                            win: 82,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 64,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.47889,
                pick_rate: 0.0828345,
                ban_rate: 0.0167963,
                kda: 2.633968,
                tier: 5,
                rank: 117,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.479936,
                        pick_rate: 0.0777497,
                        role_rate: 0.935971,
                        ban_rate: 0.0157209,
                        kda: 2.692082,
                        tier_data: {
                            tier: 3,
                            rank: 27,
                            rank_prev: 27,
                            rank_prev_patch: 24,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.481785,
                                role_rate: 0.947613,
                                play: 35960,
                                win: 17325,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.461089,
                                role_rate: 0.0406346,
                                play: 1542,
                                win: 711,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 19,
                            play: 556,
                            win: 236,
                        },
                        {
                            champion_id: 48,
                            play: 162,
                            win: 69,
                        },
                        {
                            champion_id: 63,
                            play: 1694,
                            win: 725,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 92,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.501435,
                pick_rate: 0.0651288,
                ban_rate: 0.0410905,
                kda: 1.932966,
                tier: 4,
                rank: 74,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.502479,
                        pick_rate: 0.060871,
                        role_rate: 0.931544,
                        ban_rate: 0.0382776,
                        kda: 1.924255,
                        tier_data: {
                            tier: 3,
                            rank: 14,
                            rank_prev: 14,
                            rank_prev_patch: 8,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.501958,
                                role_rate: 0.948097,
                                play: 28094,
                                win: 14102,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.522107,
                                role_rate: 0.0519033,
                                play: 1538,
                                win: 803,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 4,
                            play: 196,
                            win: 81,
                        },
                        {
                            champion_id: 420,
                            play: 1059,
                            win: 443,
                        },
                        {
                            champion_id: 69,
                            play: 95,
                            win: 40,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 127,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.501066,
                pick_rate: 0.0266774,
                ban_rate: 0.0114423,
                kda: 2.369028,
                tier: 5,
                rank: 123,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.501635,
                        pick_rate: 0.023536,
                        role_rate: 0.884979,
                        ban_rate: 0.0101262,
                        kda: 2.41963,
                        tier_data: {
                            tier: 3,
                            rank: 37,
                            rank_prev: 37,
                            rank_prev_patch: 34,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.501948,
                                role_rate: 0.997927,
                                play: 11553,
                                win: 5799,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 29,
                            play: 31,
                            win: 11,
                        },
                        {
                            champion_id: 112,
                            play: 191,
                            win: 69,
                        },
                        {
                            champion_id: 1,
                            play: 76,
                            win: 29,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 876,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.500853,
                pick_rate: 0.0785813,
                ban_rate: 0.264376,
                kda: 2.69561,
                tier: 3,
                rank: 54,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.501956,
                        pick_rate: 0.0765881,
                        role_rate: 0.97189,
                        ban_rate: 0.256945,
                        kda: 2.727847,
                        tier_data: {
                            tier: 2,
                            rank: 13,
                            rank_prev: 13,
                            rank_prev_patch: 1,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.503214,
                                role_rate: 0.996769,
                                play: 37022,
                                win: 18630,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 11,
                            play: 1136,
                            win: 493,
                        },
                        {
                            champion_id: 163,
                            play: 304,
                            win: 134,
                        },
                        {
                            champion_id: 28,
                            play: 1236,
                            win: 553,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 11,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.519159,
                pick_rate: 0.0714893,
                ban_rate: 0.120228,
                kda: 2.063325,
                tier: 3,
                rank: 22,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.520011,
                        pick_rate: 0.0697083,
                        role_rate: 0.972342,
                        ban_rate: 0.116902,
                        kda: 2.082619,
                        tier_data: {
                            tier: 1,
                            rank: 6,
                            rank_prev: 6,
                            rank_prev_patch: 6,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.529997,
                                role_rate: 0.689775,
                                play: 23502,
                                win: 12456,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.50224,
                                role_rate: 0.294817,
                                play: 10045,
                                win: 5045,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 60,
                            play: 281,
                            win: 118,
                        },
                        {
                            champion_id: 421,
                            play: 143,
                            win: 61,
                        },
                        {
                            champion_id: 427,
                            play: 332,
                            win: 148,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 57,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.543122,
                pick_rate: 0.171627,
                ban_rate: 0.221312,
                kda: 2.655247,
                tier: 1,
                rank: 1,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.547633,
                        pick_rate: 0.145824,
                        role_rate: 0.845024,
                        ban_rate: 0.187014,
                        kda: 2.633742,
                        tier_data: {
                            tier: 1,
                            rank: 1,
                            rank_prev: 1,
                            rank_prev_patch: 1,
                        },
                    },
                    roles: [
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.55132,
                                role_rate: 0.667112,
                                play: 47457,
                                win: 26164,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.544013,
                                role_rate: 0.315556,
                                play: 22448,
                                win: 12212,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.490079,
                                role_rate: 0.0141696,
                                play: 1008,
                                win: 494,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 888,
                            play: 961,
                            win: 477,
                        },
                        {
                            champion_id: 25,
                            play: 1995,
                            win: 997,
                        },
                        {
                            champion_id: 40,
                            play: 4251,
                            win: 2134,
                        },
                    ],
                },
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.50842,
                        pick_rate: 0.0151269,
                        role_rate: 0.0878898,
                        ban_rate: 0.0194511,
                        kda: 3.084869,
                        tier_data: {
                            tier: 3,
                            rank: 26,
                            rank_prev: 26,
                            rank_prev_patch: 29,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.508178,
                                role_rate: 0.941765,
                                play: 6970,
                                win: 3542,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.52568,
                                role_rate: 0.0447237,
                                play: 331,
                                win: 174,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 20,
                            play: 101,
                            win: 41,
                        },
                        {
                            champion_id: 91,
                            play: 44,
                            win: 18,
                        },
                        {
                            champion_id: 427,
                            play: 79,
                            win: 34,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 90,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.495725,
                pick_rate: 0.0370736,
                ban_rate: 0.0453538,
                kda: 2.20851,
                tier: 5,
                rank: 118,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.496953,
                        pick_rate: 0.0329136,
                        role_rate: 0.890539,
                        ban_rate: 0.0403894,
                        kda: 2.240548,
                        tier_data: {
                            tier: 3,
                            rank: 33,
                            rank_prev: 33,
                            rank_prev_patch: 29,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.49771,
                                role_rate: 0.998024,
                                play: 16160,
                                win: 8043,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 69,
                            play: 201,
                            win: 78,
                        },
                        {
                            champion_id: 136,
                            play: 610,
                            win: 254,
                        },
                        {
                            champion_id: 34,
                            play: 212,
                            win: 90,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 54,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.509151,
                pick_rate: 0.0689471,
                ban_rate: 0.106191,
                kda: 2.653471,
                tier: 3,
                rank: 45,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.514792,
                        pick_rate: 0.0572684,
                        role_rate: 0.827876,
                        ban_rate: 0.0879131,
                        kda: 2.704484,
                        tier_data: {
                            tier: 3,
                            rank: 8,
                            rank_prev: 8,
                            rank_prev_patch: 4,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.518151,
                                role_rate: 0.940553,
                                play: 26280,
                                win: 13617,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.462065,
                                role_rate: 0.0575498,
                                play: 1608,
                                win: 743,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 50,
                            play: 61,
                            win: 18,
                        },
                        {
                            champion_id: 36,
                            play: 380,
                            win: 159,
                        },
                        {
                            champion_id: 19,
                            play: 162,
                            win: 68,
                        },
                    ],
                },
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.503309,
                        pick_rate: 0.00703974,
                        role_rate: 0.10242,
                        ban_rate: 0.0108761,
                        kda: 2.623033,
                        tier_data: {
                            tier: 4,
                            rank: 50,
                            rank_prev: 50,
                            rank_prev_patch: 40,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.538629,
                                role_rate: 0.534458,
                                play: 1838,
                                win: 990,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.464085,
                                role_rate: 0.465542,
                                play: 1601,
                                win: 743,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 45,
                            play: 31,
                            win: 10,
                        },
                        {
                            champion_id: 131,
                            play: 32,
                            win: 11,
                        },
                        {
                            champion_id: 134,
                            play: 46,
                            win: 17,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 82,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.519212,
                pick_rate: 0.0714507,
                ban_rate: 0.0955633,
                kda: 1.930343,
                tier: 3,
                rank: 23,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.520085,
                        pick_rate: 0.0644594,
                        role_rate: 0.899178,
                        ban_rate: 0.0859285,
                        kda: 1.901379,
                        tier_data: {
                            tier: 2,
                            rank: 5,
                            rank_prev: 5,
                            rank_prev_patch: 7,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.528266,
                                role_rate: 0.869448,
                                play: 27365,
                                win: 14456,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.472215,
                                role_rate: 0.127502,
                                play: 4013,
                                win: 1895,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 69,
                            play: 118,
                            win: 48,
                        },
                        {
                            champion_id: 85,
                            play: 117,
                            win: 51,
                        },
                        {
                            champion_id: 27,
                            play: 203,
                            win: 89,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 25,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.507269,
                pick_rate: 0.0538161,
                ban_rate: 0.134642,
                kda: 2.644805,
                tier: 4,
                rank: 62,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.508179,
                        pick_rate: 0.0480919,
                        role_rate: 0.888759,
                        ban_rate: 0.119664,
                        kda: 2.616631,
                        tier_data: {
                            tier: 4,
                            rank: 13,
                            rank_prev: 13,
                            rank_prev_patch: 13,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.510418,
                                role_rate: 0.952758,
                                play: 22366,
                                win: 11416,
                            },
                        },
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.485075,
                                role_rate: 0.0342492,
                                play: 804,
                                win: 390,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 17,
                            play: 66,
                            win: 26,
                        },
                        {
                            champion_id: 164,
                            play: 59,
                            win: 24,
                        },
                        {
                            champion_id: 143,
                            play: 937,
                            win: 404,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 36,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.505129,
                pick_rate: 0.0263462,
                ban_rate: 0.0127081,
                kda: 1.931793,
                tier: 5,
                rank: 114,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.508164,
                        pick_rate: 0.0243496,
                        role_rate: 0.921172,
                        ban_rate: 0.0117064,
                        kda: 1.911671,
                        tier_data: {
                            tier: 4,
                            rank: 27,
                            rank_prev: 27,
                            rank_prev_patch: 10,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.510201,
                                role_rate: 1,
                                play: 11764,
                                win: 6002,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.404762,
                                role_rate: 0.0109375,
                                play: 126,
                                win: 51,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 2,
                            play: 129,
                            win: 50,
                        },
                        {
                            champion_id: 233,
                            play: 38,
                            win: 15,
                        },
                        {
                            champion_id: 43,
                            play: 62,
                            win: 25,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 21,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.520164,
                pick_rate: 0.145527,
                ban_rate: 0.143687,
                kda: 2.420071,
                tier: 2,
                rank: 10,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.522307,
                        pick_rate: 0.140151,
                        role_rate: 0.971221,
                        ban_rate: 0.139552,
                        kda: 2.431613,
                        tier_data: {
                            tier: 1,
                            rank: 2,
                            rank_prev: 2,
                            rank_prev_patch: 1,
                        },
                    },
                    roles: [
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.550705,
                                role_rate: 0.65124,
                                play: 45015,
                                win: 24790,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.46912,
                                role_rate: 0.341295,
                                play: 23591,
                                win: 11067,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 50,
                            play: 194,
                            win: 82,
                        },
                        {
                            champion_id: 30,
                            play: 148,
                            win: 66,
                        },
                        {
                            champion_id: 147,
                            play: 1171,
                            win: 532,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 902,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.503971,
                pick_rate: 0.0780387,
                ban_rate: 0.0435296,
                kda: 3.681535,
                tier: 3,
                rank: 55,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.504358,
                        pick_rate: 0.0782972,
                        role_rate: 0.997839,
                        ban_rate: 0.0434355,
                        kda: 3.682426,
                        tier_data: {
                            tier: 3,
                            rank: 10,
                            rank_prev: 10,
                            rank_prev_patch: 10,
                        },
                    },
                    roles: [
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.505398,
                                role_rate: 0.99369,
                                play: 37792,
                                win: 19100,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 57,
                            play: 2968,
                            win: 1341,
                        },
                        {
                            champion_id: 37,
                            play: 642,
                            win: 293,
                        },
                        {
                            champion_id: 53,
                            play: 1529,
                            win: 709,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 432,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.521845,
                pick_rate: 0.0947426,
                ban_rate: 0.0625712,
                kda: 3.339077,
                tier: 2,
                rank: 15,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.523017,
                        pick_rate: 0.0947208,
                        role_rate: 0.994316,
                        ban_rate: 0.0622155,
                        kda: 3.346594,
                        tier_data: {
                            tier: 2,
                            rank: 5,
                            rank_prev: 5,
                            rank_prev_patch: 3,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.517485,
                                role_rate: 0.675275,
                                play: 31141,
                                win: 16115,
                            },
                        },
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.538534,
                                role_rate: 0.299657,
                                play: 13819,
                                win: 7442,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.493711,
                                role_rate: 0.020687,
                                play: 954,
                                win: 471,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 164,
                            play: 236,
                            win: 105,
                        },
                        {
                            champion_id: 223,
                            play: 154,
                            win: 71,
                        },
                        {
                            champion_id: 57,
                            play: 3449,
                            win: 1625,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 110,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.490181,
                pick_rate: 0.103172,
                ban_rate: 0.0286733,
                kda: 2.281607,
                tier: 4,
                rank: 78,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.49071,
                        pick_rate: 0.0946762,
                        role_rate: 0.92543,
                        ban_rate: 0.0265352,
                        kda: 2.320538,
                        tier_data: {
                            tier: 3,
                            rank: 17,
                            rank_prev: 17,
                            rank_prev_patch: 13,
                        },
                    },
                    roles: [
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.494009,
                                role_rate: 0.536307,
                                play: 25119,
                                win: 12409,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.496023,
                                role_rate: 0.271132,
                                play: 12699,
                                win: 6299,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.481553,
                                role_rate: 0.164934,
                                play: 7725,
                                win: 3720,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.429273,
                                role_rate: 0.021735,
                                play: 1018,
                                win: 437,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 115,
                            play: 237,
                            win: 98,
                        },
                        {
                            champion_id: 50,
                            play: 133,
                            win: 56,
                        },
                        {
                            champion_id: 29,
                            play: 1597,
                            win: 689,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 254,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.5136,
                pick_rate: 0.0723184,
                ban_rate: 0.0168914,
                kda: 2.481916,
                tier: 3,
                rank: 34,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.51638,
                        pick_rate: 0.0686752,
                        role_rate: 0.946948,
                        ban_rate: 0.0159953,
                        kda: 2.53287,
                        tier_data: {
                            tier: 2,
                            rank: 9,
                            rank_prev: 9,
                            rank_prev_patch: 9,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.519225,
                                role_rate: 0.84822,
                                play: 28479,
                                win: 14787,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.512099,
                                role_rate: 0.0676992,
                                play: 2273,
                                win: 1164,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.481187,
                                role_rate: 0.0562025,
                                play: 1887,
                                win: 908,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.521998,
                                role_rate: 0.0250484,
                                play: 841,
                                win: 439,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 887,
                            play: 80,
                            win: 34,
                        },
                        {
                            champion_id: 427,
                            play: 375,
                            win: 170,
                        },
                        {
                            champion_id: 121,
                            play: 1024,
                            win: 491,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 45,
            is_rotation: true,
            is_rip: false,
            average_stats: {
                win_rate: 0.490412,
                pick_rate: 0.0366672,
                ban_rate: 0.00682806,
                kda: 2.164649,
                tier: 5,
                rank: 133,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.491137,
                        pick_rate: 0.0291415,
                        role_rate: 0.797218,
                        ban_rate: 0.00544345,
                        kda: 2.203858,
                        tier_data: {
                            tier: 4,
                            rank: 41,
                            rank_prev: 41,
                            rank_prev_patch: 35,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.492013,
                                role_rate: 0.991973,
                                play: 14211,
                                win: 6992,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 29,
                            play: 57,
                            win: 24,
                        },
                        {
                            champion_id: 50,
                            play: 110,
                            win: 47,
                        },
                        {
                            champion_id: 950,
                            play: 106,
                            win: 46,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 67,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.529735,
                pick_rate: 0.162481,
                ban_rate: 0.136752,
                kda: 2.140429,
                tier: 1,
                rank: 2,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.530741,
                        pick_rate: 0.134538,
                        role_rate: 0.835036,
                        ban_rate: 0.114193,
                        kda: 2.221003,
                        tier_data: {
                            tier: 0,
                            rank: 1,
                            rank_prev: 1,
                            rank_prev_patch: 3,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.531198,
                                role_rate: 0.731191,
                                play: 48641,
                                win: 25838,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.529724,
                                role_rate: 0.254634,
                                play: 16939,
                                win: 8973,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 50,
                            play: 148,
                            win: 71,
                        },
                        {
                            champion_id: 96,
                            play: 229,
                            win: 110,
                        },
                        {
                            champion_id: 22,
                            play: 2235,
                            win: 1101,
                        },
                    ],
                },
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.53004,
                        pick_rate: 0.0221599,
                        role_rate: 0.135936,
                        ban_rate: 0.0185894,
                        kda: 1.715261,
                        tier_data: {
                            tier: 3,
                            rank: 10,
                            rank_prev: 10,
                            rank_prev_patch: 11,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.499175,
                                role_rate: 0.559948,
                                play: 6062,
                                win: 3026,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.574898,
                                role_rate: 0.406983,
                                play: 4406,
                                win: 2533,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.54,
                                role_rate: 0.018474,
                                play: 200,
                                win: 108,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 17,
                            play: 220,
                            win: 91,
                        },
                        {
                            champion_id: 54,
                            play: 327,
                            win: 146,
                        },
                        {
                            champion_id: 2,
                            play: 116,
                            win: 52,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 711,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.500542,
                pick_rate: 0.0243872,
                ban_rate: 0.0229761,
                kda: 2.39235,
                tier: 5,
                rank: 131,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.502308,
                        pick_rate: 0.0232585,
                        role_rate: 0.95667,
                        ban_rate: 0.0219806,
                        kda: 2.414623,
                        tier_data: {
                            tier: 3,
                            rank: 36,
                            rank_prev: 36,
                            rank_prev_patch: 42,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.502457,
                                role_rate: 1,
                                play: 11394,
                                win: 5725,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 29,
                            play: 33,
                            win: 12,
                        },
                        {
                            champion_id: 161,
                            play: 107,
                            win: 39,
                        },
                        {
                            champion_id: 69,
                            play: 141,
                            win: 55,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 200,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.520673,
                pick_rate: 0.0665472,
                ban_rate: 0.140412,
                kda: 2.355114,
                tier: 3,
                rank: 20,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.521879,
                        pick_rate: 0.0658038,
                        role_rate: 0.986045,
                        ban_rate: 0.138452,
                        kda: 2.369279,
                        tier_data: {
                            tier: 1,
                            rank: 4,
                            rank_prev: 4,
                            rank_prev_patch: 12,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.52472,
                                role_rate: 0.824534,
                                play: 26517,
                                win: 13914,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.522194,
                                role_rate: 0.145709,
                                play: 4686,
                                win: 2447,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.457008,
                                role_rate: 0.0263993,
                                play: 849,
                                win: 388,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 17,
                            play: 83,
                            win: 37,
                        },
                        {
                            champion_id: 33,
                            play: 563,
                            win: 252,
                        },
                        {
                            champion_id: 48,
                            play: 171,
                            win: 79,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 161,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.512382,
                pick_rate: 0.0442286,
                ban_rate: 0.00345071,
                kda: 2.442118,
                tier: 4,
                rank: 66,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.511297,
                        pick_rate: 0.0220572,
                        role_rate: 0.500253,
                        ban_rate: 0.00172623,
                        kda: 2.68146,
                        tier_data: {
                            tier: 3,
                            rank: 29,
                            rank_prev: 29,
                            rank_prev_patch: 31,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.51137,
                                role_rate: 1,
                                play: 10730,
                                win: 5487,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 38,
                            play: 193,
                            win: 77,
                        },
                        {
                            champion_id: 80,
                            play: 30,
                            win: 12,
                        },
                        {
                            champion_id: 950,
                            play: 88,
                            win: 36,
                        },
                    ],
                },
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.513882,
                        pick_rate: 0.0200912,
                        role_rate: 0.45178,
                        ban_rate: 0.00155896,
                        kda: 2.245311,
                        tier_data: {
                            tier: 4,
                            rank: 22,
                            rank_prev: 22,
                            rank_prev_patch: 31,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.513661,
                                role_rate: 1,
                                play: 9699,
                                win: 4982,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 518,
                            play: 74,
                            win: 31,
                        },
                        {
                            champion_id: 29,
                            play: 32,
                            win: 14,
                        },
                        {
                            champion_id: 16,
                            play: 121,
                            win: 53,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 106,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.491725,
                pick_rate: 0.0271346,
                ban_rate: 0.00464253,
                kda: 1.630783,
                tier: 5,
                rank: 144,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.490701,
                        pick_rate: 0.0211568,
                        role_rate: 0.777129,
                        ban_rate: 0.00360785,
                        kda: 1.48896,
                        tier_data: {
                            tier: 5,
                            rank: 45,
                            rank_prev: 45,
                            rank_prev_patch: 45,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.472502,
                                role_rate: 0.45391,
                                play: 4673,
                                win: 2208,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.507618,
                                role_rate: 0.420787,
                                play: 4332,
                                win: 2199,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.508527,
                                role_rate: 0.125304,
                                play: 1290,
                                win: 656,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 166,
                            play: 32,
                            win: 11,
                        },
                        {
                            champion_id: 875,
                            play: 198,
                            win: 80,
                        },
                        {
                            champion_id: 19,
                            play: 80,
                            win: 33,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 201,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.512151,
                pick_rate: 0.0295162,
                ban_rate: 0.00518612,
                kda: 3.048702,
                tier: 4,
                rank: 91,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.51236,
                        pick_rate: 0.0295903,
                        role_rate: 0.99704,
                        ban_rate: 0.00517077,
                        kda: 3.051655,
                        tier_data: {
                            tier: 4,
                            rank: 18,
                            rank_prev: 18,
                            rank_prev_patch: 21,
                        },
                    },
                    roles: [
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.513408,
                                role_rate: 0.643697,
                                play: 9248,
                                win: 4748,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.511819,
                                role_rate: 0.356303,
                                play: 5119,
                                win: 2620,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 17,
                            play: 59,
                            win: 21,
                        },
                        {
                            champion_id: 26,
                            play: 140,
                            win: 58,
                        },
                        {
                            champion_id: 37,
                            play: 121,
                            win: 53,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 233,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.517435,
                pick_rate: 0.0885243,
                ban_rate: 0.236136,
                kda: 2.098544,
                tier: 3,
                rank: 17,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.516221,
                        pick_rate: 0.0783284,
                        role_rate: 0.882331,
                        ban_rate: 0.20835,
                        kda: 2.171597,
                        tier_data: {
                            tier: 1,
                            rank: 5,
                            rank_prev: 5,
                            rank_prev_patch: 3,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.525892,
                                role_rate: 0.703717,
                                play: 26958,
                                win: 14177,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.502958,
                                role_rate: 0.15887,
                                play: 6086,
                                win: 3061,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.484043,
                                role_rate: 0.117782,
                                play: 4512,
                                win: 2184,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.50639,
                                role_rate: 0.0163412,
                                play: 626,
                                win: 317,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 48,
                            play: 189,
                            win: 78,
                        },
                        {
                            champion_id: 421,
                            play: 167,
                            win: 74,
                        },
                        {
                            champion_id: 200,
                            play: 1243,
                            win: 590,
                        },
                    ],
                },
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.519131,
                        pick_rate: 0.00900547,
                        role_rate: 0.101393,
                        ban_rate: 0.0239426,
                        kda: 1.599548,
                        tier_data: {
                            tier: 4,
                            rank: 32,
                            rank_prev: 32,
                            rank_prev_patch: 34,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.521585,
                                role_rate: 0.991347,
                                play: 4239,
                                win: 2211,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.475,
                                role_rate: 0.018731,
                                play: 80,
                                win: 38,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 24,
                            play: 101,
                            win: 39,
                        },
                        {
                            champion_id: 157,
                            play: 47,
                            win: 19,
                        },
                        {
                            champion_id: 4,
                            play: 37,
                            win: 15,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 63,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.520757,
                pick_rate: 0.146703,
                ban_rate: 0.201651,
                kda: 2.214618,
                tier: 2,
                rank: 7,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.520022,
                        pick_rate: 0.0929764,
                        role_rate: 0.631986,
                        ban_rate: 0.12744,
                        kda: 2.367741,
                        tier_data: {
                            tier: 1,
                            rank: 3,
                            rank_prev: 3,
                            rank_prev_patch: 2,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.520425,
                                role_rate: 1,
                                play: 45311,
                                win: 23581,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 35,
                            play: 1343,
                            win: 607,
                        },
                        {
                            champion_id: 76,
                            play: 687,
                            win: 313,
                        },
                        {
                            champion_id: 28,
                            play: 1459,
                            win: 696,
                        },
                    ],
                },
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.518692,
                        pick_rate: 0.0406095,
                        role_rate: 0.275304,
                        ban_rate: 0.0555151,
                        kda: 1.92413,
                        tier_data: {
                            tier: 3,
                            rank: 9,
                            rank_prev: 9,
                            rank_prev_patch: 7,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.51944,
                                role_rate: 1,
                                play: 19727,
                                win: 10247,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 161,
                            play: 219,
                            win: 89,
                        },
                        {
                            champion_id: 17,
                            play: 60,
                            win: 27,
                        },
                        {
                            champion_id: 40,
                            play: 1015,
                            win: 471,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 8,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.503659,
                pick_rate: 0.0516519,
                ban_rate: 0.0666354,
                kda: 2.349849,
                tier: 4,
                rank: 81,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.506038,
                        pick_rate: 0.0397609,
                        role_rate: 0.772169,
                        ban_rate: 0.0514538,
                        kda: 2.422899,
                        tier_data: {
                            tier: 3,
                            rank: 19,
                            rank_prev: 19,
                            rank_prev_patch: 20,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.50756,
                                role_rate: 0.987936,
                                play: 19245,
                                win: 9768,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.438298,
                                role_rate: 0.0120637,
                                play: 235,
                                win: 103,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 10,
                            play: 74,
                            win: 24,
                        },
                        {
                            champion_id: 115,
                            play: 65,
                            win: 27,
                        },
                        {
                            champion_id: 90,
                            play: 398,
                            win: 173,
                        },
                    ],
                },
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.491135,
                        pick_rate: 0.0108098,
                        role_rate: 0.208592,
                        ban_rate: 0.0138996,
                        kda: 2.067006,
                        tier_data: {
                            tier: 5,
                            rank: 53,
                            rank_prev: 53,
                            rank_prev_patch: 52,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.494104,
                                role_rate: 0.98178,
                                play: 5173,
                                win: 2556,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.364583,
                                role_rate: 0.0182198,
                                play: 96,
                                win: 35,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 43,
                            play: 43,
                            win: 15,
                        },
                        {
                            champion_id: 84,
                            play: 63,
                            win: 24,
                        },
                        {
                            champion_id: 887,
                            play: 72,
                            win: 28,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 53,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.508475,
                pick_rate: 0.0748097,
                ban_rate: 0.198674,
                kda: 2.589324,
                tier: 3,
                rank: 38,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.509288,
                        pick_rate: 0.0749074,
                        role_rate: 0.995844,
                        ban_rate: 0.197849,
                        kda: 2.593461,
                        tier_data: {
                            tier: 3,
                            rank: 6,
                            rank_prev: 6,
                            rank_prev_patch: 6,
                        },
                    },
                    roles: [
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.508478,
                                role_rate: 0.517822,
                                play: 18813,
                                win: 9566,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.514587,
                                role_rate: 0.461342,
                                play: 16761,
                                win: 8625,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.430647,
                                role_rate: 0.0208362,
                                play: 757,
                                win: 326,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 44,
                            play: 261,
                            win: 113,
                        },
                        {
                            champion_id: 35,
                            play: 269,
                            win: 118,
                        },
                        {
                            champion_id: 57,
                            play: 2289,
                            win: 1016,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 234,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.507159,
                pick_rate: 0.116378,
                ban_rate: 0.027702,
                kda: 2.396734,
                tier: 3,
                rank: 25,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.507615,
                        pick_rate: 0.114531,
                        role_rate: 0.981351,
                        ban_rate: 0.0271854,
                        kda: 2.408101,
                        tier_data: {
                            tier: 2,
                            rank: 7,
                            rank_prev: 7,
                            rank_prev_patch: 8,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.513363,
                                role_rate: 0.932748,
                                play: 52121,
                                win: 26757,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.428982,
                                role_rate: 0.0497683,
                                play: 2781,
                                win: 1193,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.461078,
                                role_rate: 0.014943,
                                play: 835,
                                win: 385,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 421,
                            play: 245,
                            win: 107,
                        },
                        {
                            champion_id: 427,
                            play: 591,
                            win: 261,
                        },
                        {
                            champion_id: 77,
                            play: 776,
                            win: 356,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 112,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.508212,
                pick_rate: 0.0327879,
                ban_rate: 0.00717941,
                kda: 2.265387,
                tier: 4,
                rank: 98,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.507823,
                        pick_rate: 0.0306852,
                        role_rate: 0.938767,
                        ban_rate: 0.00673979,
                        kda: 2.281085,
                        tier_data: {
                            tier: 3,
                            rank: 24,
                            rank_prev: 25,
                            rank_prev_patch: 32,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.508208,
                                role_rate: 1,
                                play: 15047,
                                win: 7647,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 29,
                            play: 59,
                            win: 22,
                        },
                        {
                            champion_id: 85,
                            play: 40,
                            win: 17,
                        },
                        {
                            champion_id: 99,
                            play: 278,
                            win: 121,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 78,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.500353,
                pick_rate: 0.0374008,
                ban_rate: 0.0165886,
                kda: 2.477802,
                tier: 4,
                rank: 110,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.502422,
                        pick_rate: 0.0180986,
                        role_rate: 0.482315,
                        ban_rate: 0.00800094,
                        kda: 2.213848,
                        tier_data: {
                            tier: 4,
                            rank: 38,
                            rank_prev: 36,
                            rank_prev_patch: 26,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.50377,
                                role_rate: 0.9322,
                                play: 8222,
                                win: 4142,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.496656,
                                role_rate: 0.0678005,
                                play: 598,
                                win: 297,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 420,
                            play: 238,
                            win: 94,
                        },
                        {
                            champion_id: 62,
                            play: 48,
                            win: 19,
                        },
                        {
                            champion_id: 4,
                            play: 69,
                            win: 28,
                        },
                    ],
                },
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.489481,
                        pick_rate: 0.0152084,
                        role_rate: 0.405488,
                        ban_rate: 0.00672649,
                        kda: 2.818776,
                        tier_data: {
                            tier: 4,
                            rank: 45,
                            rank_prev: 45,
                            rank_prev_patch: 36,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.490336,
                                role_rate: 0.891467,
                                play: 6571,
                                win: 3222,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.490196,
                                role_rate: 0.0899471,
                                play: 663,
                                win: 325,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.452555,
                                role_rate: 0.0185864,
                                play: 137,
                                win: 62,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 91,
                            play: 64,
                            win: 25,
                        },
                        {
                            champion_id: 79,
                            play: 96,
                            win: 40,
                        },
                        {
                            champion_id: 421,
                            play: 33,
                            win: 14,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 360,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.492704,
                pick_rate: 0.0703289,
                ban_rate: 0.16432,
                kda: 2.125888,
                tier: 4,
                rank: 88,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.493383,
                        pick_rate: 0.0682168,
                        role_rate: 0.978185,
                        ban_rate: 0.160735,
                        kda: 2.135514,
                        tier_data: {
                            tier: 3,
                            rank: 19,
                            rank_prev: 19,
                            rank_prev_patch: 9,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.494104,
                                role_rate: 0.988081,
                                play: 33325,
                                win: 16466,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 30,
                            play: 77,
                            win: 34,
                        },
                        {
                            champion_id: 895,
                            play: 521,
                            win: 232,
                        },
                        {
                            champion_id: 50,
                            play: 114,
                            win: 51,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 14,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.480088,
                pick_rate: 0.0444948,
                ban_rate: 0.00934867,
                kda: 1.539977,
                tier: 5,
                rank: 147,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.480249,
                        pick_rate: 0.038968,
                        role_rate: 0.872899,
                        ban_rate: 0.00816045,
                        kda: 1.503338,
                        tier_data: {
                            tier: 4,
                            rank: 42,
                            rank_prev: 42,
                            rank_prev_patch: 38,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.485947,
                                role_rate: 0.885737,
                                play: 16829,
                                win: 8178,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.45853,
                                role_rate: 0.0780526,
                                play: 1483,
                                win: 680,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.392915,
                                role_rate: 0.0326842,
                                play: 621,
                                win: 244,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 240,
                            play: 180,
                            win: 71,
                        },
                        {
                            champion_id: 233,
                            play: 82,
                            win: 33,
                        },
                        {
                            champion_id: 67,
                            play: 178,
                            win: 73,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 517,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.506055,
                pick_rate: 0.0748422,
                ban_rate: 0.0454522,
                kda: 2.115217,
                tier: 3,
                rank: 52,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.512203,
                        pick_rate: 0.0604263,
                        role_rate: 0.809883,
                        ban_rate: 0.036811,
                        kda: 2.157894,
                        tier_data: {
                            tier: 2,
                            rank: 7,
                            rank_prev: 7,
                            rank_prev_patch: 6,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.512967,
                                role_rate: 0.999899,
                                play: 29575,
                                win: 15171,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 166,
                            play: 272,
                            win: 119,
                        },
                        {
                            champion_id: 18,
                            play: 211,
                            win: 95,
                        },
                        {
                            champion_id: 38,
                            play: 560,
                            win: 254,
                        },
                    ],
                },
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.473826,
                        pick_rate: 0.00603695,
                        role_rate: 0.0803964,
                        ban_rate: 0.00365419,
                        kda: 1.823805,
                        tier_data: {
                            tier: 5,
                            rank: 58,
                            rank_prev: 58,
                            rank_prev_patch: 58,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.475353,
                                role_rate: 0.994515,
                                play: 2901,
                                win: 1379,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 420,
                            play: 56,
                            win: 17,
                        },
                        {
                            champion_id: 157,
                            play: 40,
                            win: 14,
                        },
                        {
                            champion_id: 86,
                            play: 104,
                            win: 37,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 35,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.512024,
                pick_rate: 0.0801927,
                ban_rate: 0.103878,
                kda: 2.717348,
                tier: 3,
                rank: 30,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.512895,
                        pick_rate: 0.0615529,
                        role_rate: 0.765401,
                        ban_rate: 0.0795082,
                        kda: 2.797363,
                        tier_data: {
                            tier: 2,
                            rank: 10,
                            rank_prev: 10,
                            rank_prev_patch: 25,
                        },
                    },
                    roles: [
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.522869,
                                role_rate: 0.616656,
                                play: 18475,
                                win: 9660,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.514099,
                                role_rate: 0.163351,
                                play: 4894,
                                win: 2516,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.45369,
                                role_rate: 0.117123,
                                play: 3509,
                                win: 1592,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.520631,
                                role_rate: 0.0994993,
                                play: 2981,
                                win: 1552,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 48,
                            play: 133,
                            win: 60,
                        },
                        {
                            champion_id: 233,
                            play: 1120,
                            win: 510,
                        },
                        {
                            champion_id: 30,
                            play: 336,
                            win: 154,
                        },
                    ],
                },
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.513758,
                        pick_rate: 0.0175985,
                        role_rate: 0.218255,
                        ban_rate: 0.0226719,
                        kda: 2.512464,
                        tier_data: {
                            tier: 4,
                            rank: 23,
                            rank_prev: 23,
                            rank_prev_patch: 23,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.52616,
                                role_rate: 0.683173,
                                play: 5753,
                                win: 3027,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.49422,
                                role_rate: 0.287614,
                                play: 2422,
                                win: 1197,
                            },
                        },
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.432836,
                                role_rate: 0.0238689,
                                play: 201,
                                win: 87,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.504348,
                                role_rate: 0.0136095,
                                play: 115,
                                win: 58,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 37,
                            play: 126,
                            win: 50,
                        },
                        {
                            champion_id: 350,
                            play: 136,
                            win: 55,
                        },
                        {
                            champion_id: 44,
                            play: 45,
                            win: 19,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 235,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.519981,
                pick_rate: 0.159061,
                ban_rate: 0.199413,
                kda: 2.72363,
                tier: 2,
                rank: 6,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.514315,
                        pick_rate: 0.116326,
                        role_rate: 0.727342,
                        ban_rate: 0.145041,
                        kda: 2.619243,
                        tier_data: {
                            tier: 2,
                            rank: 4,
                            rank_prev: 4,
                            rank_prev_patch: 2,
                        },
                    },
                    roles: [
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.506224,
                                role_rate: 0.65931,
                                play: 37195,
                                win: 18829,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.543964,
                                role_rate: 0.229212,
                                play: 12931,
                                win: 7034,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.51347,
                                role_rate: 0.099353,
                                play: 5605,
                                win: 2878,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 164,
                            play: 212,
                            win: 96,
                        },
                        {
                            champion_id: 555,
                            play: 2221,
                            win: 1056,
                        },
                        {
                            champion_id: 57,
                            play: 3715,
                            win: 1770,
                        },
                    ],
                },
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.537428,
                        pick_rate: 0.0411046,
                        role_rate: 0.26061,
                        ban_rate: 0.051969,
                        kda: 3.084685,
                        tier_data: {
                            tier: 1,
                            rank: 4,
                            rank_prev: 4,
                            rank_prev_patch: 8,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.545219,
                                role_rate: 0.743271,
                                play: 15049,
                                win: 8205,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.517947,
                                role_rate: 0.236677,
                                play: 4792,
                                win: 2482,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.519704,
                                role_rate: 0.0200524,
                                play: 406,
                                win: 211,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 67,
                            play: 1213,
                            win: 608,
                        },
                        {
                            champion_id: 222,
                            play: 605,
                            win: 305,
                        },
                        {
                            champion_id: 119,
                            play: 561,
                            win: 283,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 147,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.511349,
                pick_rate: 0.0648158,
                ban_rate: 0.0271684,
                kda: 2.785544,
                tier: 3,
                rank: 46,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.543596,
                        pick_rate: 0.034989,
                        role_rate: 0.544394,
                        ban_rate: 0.0147903,
                        kda: 2.986701,
                        tier_data: {
                            tier: 1,
                            rank: 5,
                            rank_prev: 5,
                            rank_prev_patch: 5,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.526294,
                                role_rate: 0.704974,
                                play: 12189,
                                win: 6415,
                            },
                        },
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.584482,
                                role_rate: 0.293696,
                                play: 5078,
                                win: 2968,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 96,
                            play: 53,
                            win: 20,
                        },
                        {
                            champion_id: 50,
                            play: 43,
                            win: 19,
                        },
                        {
                            champion_id: 30,
                            play: 56,
                            win: 26,
                        },
                    ],
                },
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.46597,
                        pick_rate: 0.0242574,
                        role_rate: 0.37221,
                        ban_rate: 0.0101123,
                        kda: 2.519887,
                        tier_data: {
                            tier: 5,
                            rank: 38,
                            rank_prev: 38,
                            rank_prev_patch: 34,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.449206,
                                role_rate: 0.533446,
                                play: 6300,
                                win: 2830,
                            },
                        },
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.486136,
                                role_rate: 0.464183,
                                play: 5482,
                                win: 2665,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 223,
                            play: 45,
                            win: 13,
                        },
                        {
                            champion_id: 164,
                            play: 37,
                            win: 14,
                        },
                        {
                            champion_id: 37,
                            play: 166,
                            win: 63,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 113,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.478898,
                pick_rate: 0.0199816,
                ban_rate: 0.00114367,
                kda: 2.953049,
                tier: 5,
                rank: 164,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.476998,
                        pick_rate: 0.0178963,
                        role_rate: 0.893115,
                        ban_rate: 0.00102142,
                        kda: 3.037243,
                        tier_data: {
                            tier: 5,
                            rank: 46,
                            rank_prev: 46,
                            rank_prev_patch: 41,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.477068,
                                role_rate: 1,
                                play: 8678,
                                win: 4140,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 238,
                            play: 34,
                            win: 13,
                        },
                        {
                            champion_id: 56,
                            play: 365,
                            win: 148,
                        },
                        {
                            champion_id: 141,
                            play: 340,
                            win: 139,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 875,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.507142,
                pick_rate: 0.0367038,
                ban_rate: 0.00636413,
                kda: 1.718491,
                tier: 4,
                rank: 93,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.511032,
                        pick_rate: 0.0330819,
                        role_rate: 0.89835,
                        ban_rate: 0.00571722,
                        kda: 1.700372,
                        tier_data: {
                            tier: 3,
                            rank: 20,
                            rank_prev: 20,
                            rank_prev_patch: 29,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.516619,
                                role_rate: 0.948139,
                                play: 15284,
                                win: 7896,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.425667,
                                role_rate: 0.0488213,
                                play: 787,
                                win: 335,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 43,
                            play: 60,
                            win: 23,
                        },
                        {
                            champion_id: 6,
                            play: 230,
                            win: 94,
                        },
                        {
                            champion_id: 233,
                            play: 73,
                            win: 30,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 37,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.51874,
                pick_rate: 0.0295488,
                ban_rate: 0.00108189,
                kda: 3.063607,
                tier: 4,
                rank: 76,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.519762,
                        pick_rate: 0.0294677,
                        role_rate: 0.991816,
                        ban_rate: 0.00107304,
                        kda: 3.06767,
                        tier_data: {
                            tier: 4,
                            rank: 14,
                            rank_prev: 14,
                            rank_prev_patch: 14,
                        },
                    },
                    roles: [
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.538185,
                                role_rate: 0.795772,
                                play: 11405,
                                win: 6138,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.450619,
                                role_rate: 0.197111,
                                play: 2825,
                                win: 1273,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 44,
                            play: 90,
                            win: 33,
                        },
                        {
                            champion_id: 17,
                            play: 42,
                            win: 16,
                        },
                        {
                            champion_id: 164,
                            play: 57,
                            win: 22,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 16,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.503437,
                pick_rate: 0.0319283,
                ban_rate: 0.00859476,
                kda: 2.862237,
                tier: 4,
                rank: 111,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.507867,
                        pick_rate: 0.0311677,
                        role_rate: 0.97085,
                        ban_rate: 0.00834423,
                        kda: 2.872909,
                        tier_data: {
                            tier: 4,
                            rank: 20,
                            rank_prev: 20,
                            rank_prev_patch: 25,
                        },
                    },
                    roles: [
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.509858,
                                role_rate: 0.977364,
                                play: 14810,
                                win: 7551,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.43299,
                                role_rate: 0.0128027,
                                play: 194,
                                win: 84,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 17,
                            play: 60,
                            win: 26,
                        },
                        {
                            champion_id: 57,
                            play: 978,
                            win: 432,
                        },
                        {
                            champion_id: 40,
                            play: 920,
                            win: 409,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 98,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.503788,
                pick_rate: 0.04748,
                ban_rate: 0.00292927,
                kda: 2.782741,
                tier: 4,
                rank: 86,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.50621,
                        pick_rate: 0.0407112,
                        role_rate: 0.854612,
                        ban_rate: 0.00250339,
                        kda: 2.806729,
                        tier_data: {
                            tier: 3,
                            rank: 19,
                            rank_prev: 19,
                            rank_prev_patch: 19,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.508898,
                                role_rate: 0.850597,
                                play: 16801,
                                win: 8550,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.49407,
                                role_rate: 0.149403,
                                play: 2951,
                                win: 1458,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 69,
                            play: 90,
                            win: 36,
                        },
                        {
                            champion_id: 950,
                            play: 51,
                            win: 21,
                        },
                        {
                            champion_id: 10,
                            play: 292,
                            win: 131,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 102,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.491266,
                pick_rate: 0.0396686,
                ban_rate: 0.00500242,
                kda: 2.257826,
                tier: 5,
                rank: 127,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.49546,
                        pick_rate: 0.0363591,
                        role_rate: 0.91399,
                        ban_rate: 0.00457216,
                        kda: 2.337301,
                        tier_data: {
                            tier: 3,
                            rank: 29,
                            rank_prev: 28,
                            rank_prev_patch: 44,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.496827,
                                role_rate: 0.798042,
                                play: 14182,
                                win: 7046,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.500345,
                                role_rate: 0.162962,
                                play: 2896,
                                win: 1449,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.465008,
                                role_rate: 0.0361825,
                                play: 643,
                                win: 299,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 427,
                            play: 191,
                            win: 73,
                        },
                        {
                            champion_id: 421,
                            play: 90,
                            win: 36,
                        },
                        {
                            champion_id: 48,
                            play: 88,
                            win: 38,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 901,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.496336,
                pick_rate: 0.331131,
                ban_rate: 0.258633,
                kda: 2.309403,
                tier: 2,
                rank: 11,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.501941,
                        pick_rate: 0.267348,
                        role_rate: 0.814219,
                        ban_rate: 0.210584,
                        kda: 2.372937,
                        tier_data: {
                            tier: 1,
                            rank: 3,
                            rank_prev: 3,
                            rank_prev_patch: 17,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.497638,
                                role_rate: 0.790928,
                                play: 104556,
                                win: 52031,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.537403,
                                role_rate: 0.106684,
                                play: 14103,
                                win: 7579,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.497235,
                                role_rate: 0.0861688,
                                play: 11391,
                                win: 5664,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.513398,
                                role_rate: 0.0141156,
                                play: 1866,
                                win: 958,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 147,
                            play: 2371,
                            win: 1015,
                        },
                        {
                            champion_id: 4,
                            play: 1673,
                            win: 771,
                        },
                        {
                            champion_id: 29,
                            play: 5308,
                            win: 2454,
                        },
                    ],
                },
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.471579,
                        pick_rate: 0.0431946,
                        role_rate: 0.13085,
                        ban_rate: 0.0338421,
                        kda: 2.125932,
                        tier_data: {
                            tier: 3,
                            rank: 38,
                            rank_prev: 38,
                            rank_prev_patch: 55,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.462131,
                                role_rate: 0.496809,
                                play: 10510,
                                win: 4857,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.464947,
                                role_rate: 0.265658,
                                play: 5620,
                                win: 2613,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.497092,
                                role_rate: 0.211298,
                                play: 4470,
                                win: 2222,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.511712,
                                role_rate: 0.0262349,
                                play: 555,
                                win: 284,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 29,
                            play: 77,
                            win: 26,
                        },
                        {
                            champion_id: 54,
                            play: 70,
                            win: 25,
                        },
                        {
                            champion_id: 115,
                            play: 61,
                            win: 23,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 50,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.502194,
                pick_rate: 0.0476913,
                ban_rate: 0.013092,
                kda: 2.417557,
                tier: 4,
                rank: 89,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.481092,
                        pick_rate: 0.0229089,
                        role_rate: 0.477737,
                        ban_rate: 0.00625453,
                        kda: 2.265917,
                        tier_data: {
                            tier: 5,
                            rank: 36,
                            rank_prev: 36,
                            rank_prev_patch: 32,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.483501,
                                role_rate: 0.891,
                                play: 9940,
                                win: 4806,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.46009,
                                role_rate: 0.0999462,
                                play: 1115,
                                win: 513,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 161,
                            play: 95,
                            win: 34,
                        },
                        {
                            champion_id: 101,
                            play: 144,
                            win: 56,
                        },
                        {
                            champion_id: 267,
                            play: 333,
                            win: 131,
                        },
                    ],
                },
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.516272,
                        pick_rate: 0.0136946,
                        role_rate: 0.28804,
                        ban_rate: 0.00377101,
                        kda: 2.639812,
                        tier_data: {
                            tier: 3,
                            rank: 35,
                            rank_prev: 35,
                            rank_prev_patch: 16,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.5157,
                                role_rate: 0.961481,
                                play: 6465,
                                win: 3334,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.528958,
                                role_rate: 0.0385187,
                                play: 259,
                                win: 137,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 38,
                            play: 104,
                            win: 41,
                        },
                        {
                            champion_id: 161,
                            play: 70,
                            win: 28,
                        },
                        {
                            champion_id: 166,
                            play: 65,
                            win: 26,
                        },
                    ],
                },
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.547668,
                        pick_rate: 0.00587583,
                        role_rate: 0.124249,
                        ban_rate: 0.00162667,
                        kda: 2.78967,
                        tier_data: {
                            tier: 3,
                            rank: 12,
                            rank_prev: 12,
                            rank_prev_patch: 24,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.547095,
                                role_rate: 0.956837,
                                play: 2771,
                                win: 1516,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.55,
                                role_rate: 0.0414365,
                                play: 120,
                                win: 66,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 895,
                            play: 36,
                            win: 14,
                        },
                        {
                            champion_id: 222,
                            play: 101,
                            win: 44,
                        },
                        {
                            champion_id: 235,
                            play: 44,
                            win: 20,
                        },
                    ],
                },
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.506057,
                        pick_rate: 0.00521734,
                        role_rate: 0.109037,
                        ban_rate: 0.00142752,
                        kda: 2.221434,
                        tier_data: {
                            tier: 5,
                            rank: 55,
                            rank_prev: 55,
                            rank_prev_patch: 54,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.509083,
                                role_rate: 0.908091,
                                play: 2312,
                                win: 1177,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.493274,
                                role_rate: 0.0875884,
                                play: 223,
                                win: 110,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 777,
                            play: 80,
                            win: 30,
                        },
                        {
                            champion_id: 154,
                            play: 43,
                            win: 17,
                        },
                        {
                            champion_id: 17,
                            play: 44,
                            win: 18,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 72,
            is_rotation: false,
            is_rip: true,
            average_stats: {
                win_rate: 0.485782,
                pick_rate: 0.00514528,
                ban_rate: 0.000547244,
                kda: 2.438378,
                tier: 5,
                rank: 167,
            },
            positions: [],
            roles: [],
        },
        {
            id: 15,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.494257,
                pick_rate: 0.0185754,
                ban_rate: 0.00157264,
                kda: 2.393854,
                tier: 5,
                rank: 158,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.495662,
                        pick_rate: 0.0181151,
                        role_rate: 0.983481,
                        ban_rate: 0.00154666,
                        kda: 2.404804,
                        tier_data: {
                            tier: 5,
                            rank: 28,
                            rank_prev: 28,
                            rank_prev_patch: 25,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.497431,
                                role_rate: 0.986593,
                                play: 8757,
                                win: 4356,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.462185,
                                role_rate: 0.0134069,
                                play: 119,
                                win: 55,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 235,
                            play: 148,
                            win: 57,
                        },
                        {
                            champion_id: 147,
                            play: 139,
                            win: 57,
                        },
                        {
                            champion_id: 221,
                            play: 130,
                            win: 56,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 5,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.508197,
                pick_rate: 0.070904,
                ban_rate: 0.0420417,
                kda: 2.331116,
                tier: 3,
                rank: 51,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.509067,
                        pick_rate: 0.0654065,
                        role_rate: 0.919867,
                        ban_rate: 0.0386728,
                        kda: 2.396991,
                        tier_data: {
                            tier: 2,
                            rank: 12,
                            rank_prev: 12,
                            rank_prev_patch: 10,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.513024,
                                role_rate: 0.948454,
                                play: 30213,
                                win: 15500,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.445046,
                                role_rate: 0.0405588,
                                play: 1292,
                                win: 575,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 887,
                            play: 92,
                            win: 39,
                        },
                        {
                            champion_id: 421,
                            play: 176,
                            win: 77,
                        },
                        {
                            champion_id: 427,
                            play: 307,
                            win: 136,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 134,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.49723,
                pick_rate: 0.0528143,
                ban_rate: 0.0427129,
                kda: 2.282811,
                tier: 4,
                rank: 99,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.496074,
                        pick_rate: 0.0492782,
                        role_rate: 0.935937,
                        ban_rate: 0.0399766,
                        kda: 2.299555,
                        tier_data: {
                            tier: 3,
                            rank: 23,
                            rank_prev: 23,
                            rank_prev_patch: 23,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.496547,
                                role_rate: 1,
                                play: 24183,
                                win: 12008,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 85,
                            play: 53,
                            win: 21,
                        },
                        {
                            champion_id: 80,
                            play: 82,
                            win: 33,
                        },
                        {
                            champion_id: 246,
                            play: 406,
                            win: 164,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 27,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.498817,
                pick_rate: 0.0231924,
                ban_rate: 0.006698,
                kda: 1.891815,
                tier: 5,
                rank: 136,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.500052,
                        pick_rate: 0.0194809,
                        role_rate: 0.837203,
                        ban_rate: 0.00560759,
                        kda: 1.82004,
                        tier_data: {
                            tier: 4,
                            rank: 39,
                            rank_prev: 40,
                            rank_prev_patch: 15,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.505144,
                                role_rate: 0.812851,
                                play: 7679,
                                win: 3879,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.479638,
                                role_rate: 0.187149,
                                play: 1768,
                                win: 848,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 19,
                            play: 69,
                            win: 24,
                        },
                        {
                            champion_id: 17,
                            play: 124,
                            win: 49,
                        },
                        {
                            champion_id: 85,
                            play: 52,
                            win: 21,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 412,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.484606,
                pick_rate: 0.0751105,
                ban_rate: 0.0181749,
                kda: 2.615778,
                tier: 4,
                rank: 109,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.485493,
                        pick_rate: 0.0750688,
                        role_rate: 0.993994,
                        ban_rate: 0.0180657,
                        kda: 2.622071,
                        tier_data: {
                            tier: 4,
                            rank: 17,
                            rank_prev: 17,
                            rank_prev_patch: 16,
                        },
                    },
                    roles: [
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.488192,
                                role_rate: 0.576323,
                                play: 21045,
                                win: 10274,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.483308,
                                role_rate: 0.419186,
                                play: 15307,
                                win: 7398,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 223,
                            play: 170,
                            win: 63,
                        },
                        {
                            champion_id: 164,
                            play: 143,
                            win: 55,
                        },
                        {
                            champion_id: 44,
                            play: 285,
                            win: 113,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 103,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.496247,
                pick_rate: 0.0471122,
                ban_rate: 0.0115356,
                kda: 2.588254,
                tier: 4,
                rank: 107,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.497895,
                        pick_rate: 0.0447485,
                        role_rate: 0.952769,
                        ban_rate: 0.0109908,
                        kda: 2.609958,
                        tier_data: {
                            tier: 3,
                            rank: 25,
                            rank_prev: 24,
                            rank_prev_patch: 28,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.49886,
                                role_rate: 0.998089,
                                play: 21934,
                                win: 10942,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 50,
                            play: 135,
                            win: 54,
                        },
                        {
                            champion_id: 10,
                            play: 42,
                            win: 17,
                        },
                        {
                            champion_id: 166,
                            play: 255,
                            win: 106,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 32,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.492585,
                pick_rate: 0.0327473,
                ban_rate: 0.00625724,
                kda: 2.483326,
                tier: 5,
                rank: 134,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.492038,
                        pick_rate: 0.0284115,
                        role_rate: 0.865157,
                        ban_rate: 0.00541349,
                        kda: 2.54428,
                        tier_data: {
                            tier: 4,
                            rank: 34,
                            rank_prev: 34,
                            rank_prev_patch: 27,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.490125,
                                role_rate: 0.913749,
                                play: 12607,
                                win: 6179,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.507563,
                                role_rate: 0.0862506,
                                play: 1190,
                                win: 604,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 887,
                            play: 36,
                            win: 10,
                        },
                        {
                            champion_id: 238,
                            play: 55,
                            win: 23,
                        },
                        {
                            champion_id: 60,
                            play: 82,
                            win: 35,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 136,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.537496,
                pick_rate: 0.0919423,
                ban_rate: 0.0957781,
                kda: 2.640586,
                tier: 2,
                rank: 4,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.53928,
                        pick_rate: 0.0817198,
                        role_rate: 0.891568,
                        ban_rate: 0.0853927,
                        kda: 2.674812,
                        tier_data: {
                            tier: 1,
                            rank: 1,
                            rank_prev: 1,
                            rank_prev_patch: 24,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.53969,
                                role_rate: 1,
                                play: 40136,
                                win: 21661,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 38,
                            play: 847,
                            win: 402,
                        },
                        {
                            champion_id: 246,
                            play: 691,
                            win: 329,
                        },
                        {
                            champion_id: 127,
                            play: 335,
                            win: 163,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 427,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.529026,
                pick_rate: 0.0235236,
                ban_rate: 0.00967564,
                kda: 3.732658,
                tier: 4,
                rank: 58,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.530151,
                        pick_rate: 0.0215603,
                        role_rate: 0.91396,
                        ban_rate: 0.00884315,
                        kda: 3.825365,
                        tier_data: {
                            tier: 2,
                            rank: 14,
                            rank_prev: 14,
                            rank_prev_patch: 18,
                        },
                    },
                    roles: [
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.529649,
                                role_rate: 0.87342,
                                play: 9191,
                                win: 4868,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.547096,
                                role_rate: 0.121068,
                                play: 1274,
                                win: 697,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 107,
                            play: 192,
                            win: 81,
                        },
                        {
                            champion_id: 19,
                            play: 141,
                            win: 62,
                        },
                        {
                            champion_id: 60,
                            play: 80,
                            win: 36,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 268,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.500716,
                pick_rate: 0.0539116,
                ban_rate: 0.0166541,
                kda: 2.111392,
                tier: 4,
                rank: 87,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.498857,
                        pick_rate: 0.0505221,
                        role_rate: 0.94003,
                        ban_rate: 0.0156553,
                        kda: 2.125435,
                        tier_data: {
                            tier: 3,
                            rank: 20,
                            rank_prev: 20,
                            rank_prev_patch: 15,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.499313,
                                role_rate: 0.997099,
                                play: 24748,
                                win: 12357,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 29,
                            play: 69,
                            win: 26,
                        },
                        {
                            champion_id: 136,
                            play: 981,
                            win: 423,
                        },
                        {
                            champion_id: 38,
                            play: 454,
                            win: 197,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 84,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.495613,
                pick_rate: 0.0968214,
                ban_rate: 0.311835,
                kda: 2.287879,
                tier: 3,
                rank: 53,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.500482,
                        pick_rate: 0.0777897,
                        role_rate: 0.805923,
                        ban_rate: 0.251315,
                        kda: 2.364902,
                        tier_data: {
                            tier: 2,
                            rank: 6,
                            rank_prev: 6,
                            rank_prev_patch: 5,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.500736,
                                role_rate: 1,
                                play: 38040,
                                win: 19048,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 50,
                            play: 221,
                            win: 91,
                        },
                        {
                            champion_id: 163,
                            play: 342,
                            win: 142,
                        },
                        {
                            champion_id: 18,
                            play: 298,
                            win: 124,
                        },
                    ],
                },
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.474122,
                        pick_rate: 0.0183963,
                        role_rate: 0.189376,
                        ban_rate: 0.059054,
                        kda: 1.977111,
                        tier_data: {
                            tier: 5,
                            rank: 51,
                            rank_prev: 50,
                            rank_prev_patch: 44,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.474287,
                                role_rate: 0.971514,
                                play: 8731,
                                win: 4141,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.460177,
                                role_rate: 0.0125737,
                                play: 113,
                                win: 52,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.504587,
                                role_rate: 0.0121286,
                                play: 109,
                                win: 55,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 950,
                            play: 37,
                            win: 9,
                        },
                        {
                            champion_id: 150,
                            play: 88,
                            win: 31,
                        },
                        {
                            champion_id: 31,
                            play: 76,
                            win: 27,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 166,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.517859,
                pick_rate: 0.0335662,
                ban_rate: 0.0390118,
                kda: 2.227971,
                tier: 4,
                rank: 70,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.520939,
                        pick_rate: 0.0236556,
                        role_rate: 0.706926,
                        ban_rate: 0.0275785,
                        kda: 2.313318,
                        tier_data: {
                            tier: 3,
                            rank: 18,
                            rank_prev: 18,
                            rank_prev_patch: 19,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.530677,
                                role_rate: 0.759094,
                                play: 8785,
                                win: 4662,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.497164,
                                role_rate: 0.182839,
                                play: 2116,
                                win: 1052,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.481595,
                                role_rate: 0.056338,
                                play: 652,
                                win: 314,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 112,
                            play: 164,
                            win: 71,
                        },
                        {
                            champion_id: 163,
                            play: 88,
                            win: 39,
                        },
                        {
                            champion_id: 29,
                            play: 40,
                            win: 18,
                        },
                    ],
                },
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.514913,
                        pick_rate: 0.0085447,
                        role_rate: 0.253723,
                        ban_rate: 0.00989821,
                        kda: 1.973811,
                        tier_data: {
                            tier: 4,
                            rank: 44,
                            rank_prev: 43,
                            rank_prev_patch: 46,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.548325,
                                role_rate: 0.63034,
                                play: 2597,
                                win: 1424,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.464579,
                                role_rate: 0.325485,
                                play: 1341,
                                win: 623,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.461538,
                                role_rate: 0.0441748,
                                play: 182,
                                win: 84,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 875,
                            play: 43,
                            win: 17,
                        },
                        {
                            champion_id: 54,
                            play: 156,
                            win: 63,
                        },
                        {
                            champion_id: 516,
                            play: 56,
                            win: 23,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 266,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.494335,
                pick_rate: 0.0905768,
                ban_rate: 0.157797,
                kda: 1.872083,
                tier: 4,
                rank: 64,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.493818,
                        pick_rate: 0.0865745,
                        role_rate: 0.952662,
                        ban_rate: 0.150327,
                        kda: 1.862785,
                        tier_data: {
                            tier: 3,
                            rank: 11,
                            rank_prev: 11,
                            rank_prev_patch: 5,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.488348,
                                role_rate: 0.817311,
                                play: 34457,
                                win: 16827,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.529175,
                                role_rate: 0.171138,
                                play: 7215,
                                win: 3818,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.430085,
                                role_rate: 0.0111957,
                                play: 472,
                                win: 203,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 233,
                            play: 228,
                            win: 94,
                        },
                        {
                            champion_id: 67,
                            play: 514,
                            win: 217,
                        },
                        {
                            champion_id: 420,
                            play: 1740,
                            win: 769,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 523,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.484018,
                pick_rate: 0.0422778,
                ban_rate: 0.00556897,
                kda: 1.941229,
                tier: 5,
                rank: 140,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.484351,
                        pick_rate: 0.0412033,
                        role_rate: 0.982841,
                        ban_rate: 0.00547341,
                        kda: 1.948929,
                        tier_data: {
                            tier: 5,
                            rank: 25,
                            rank_prev: 25,
                            rank_prev_patch: 19,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.485405,
                                role_rate: 0.996898,
                                play: 20247,
                                win: 9828,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 235,
                            play: 370,
                            win: 154,
                        },
                        {
                            champion_id: 29,
                            play: 647,
                            win: 276,
                        },
                        {
                            champion_id: 895,
                            play: 186,
                            win: 82,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 12,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.493736,
                pick_rate: 0.0353585,
                ban_rate: 0.00897233,
                kda: 2.5741,
                tier: 5,
                rank: 128,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.495769,
                        pick_rate: 0.0345329,
                        role_rate: 0.971322,
                        ban_rate: 0.00871502,
                        kda: 2.5858,
                        tier_data: {
                            tier: 4,
                            rank: 25,
                            rank_prev: 25,
                            rank_prev_patch: 20,
                        },
                    },
                    roles: [
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.496328,
                                role_rate: 0.552012,
                                play: 9260,
                                win: 4596,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.49944,
                                role_rate: 0.425991,
                                play: 7146,
                                win: 3569,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.463415,
                                role_rate: 0.021997,
                                play: 369,
                                win: 171,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 40,
                            play: 803,
                            win: 325,
                        },
                        {
                            champion_id: 161,
                            play: 117,
                            win: 51,
                        },
                        {
                            champion_id: 35,
                            play: 124,
                            win: 55,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 1,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.50747,
                pick_rate: 0.0194492,
                ban_rate: 0.00446208,
                kda: 2.354977,
                tier: 5,
                rank: 125,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.510357,
                        pick_rate: 0.0151593,
                        role_rate: 0.781841,
                        ban_rate: 0.00348864,
                        kda: 2.37314,
                        tier_data: {
                            tier: 4,
                            rank: 39,
                            rank_prev: 39,
                            rank_prev_patch: 41,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.511096,
                                role_rate: 1,
                                play: 7435,
                                win: 3800,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 79,
                            play: 50,
                            win: 18,
                        },
                        {
                            champion_id: 161,
                            play: 68,
                            win: 25,
                        },
                        {
                            champion_id: 142,
                            play: 46,
                            win: 18,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 34,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.528914,
                pick_rate: 0.0333833,
                ban_rate: 0.0222194,
                kda: 2.807728,
                tier: 3,
                rank: 37,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.531023,
                        pick_rate: 0.0295163,
                        role_rate: 0.8869,
                        ban_rate: 0.0197064,
                        kda: 2.859985,
                        tier_data: {
                            tier: 2,
                            rank: 8,
                            rank_prev: 8,
                            rank_prev_patch: 21,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.531315,
                                role_rate: 1,
                                play: 14466,
                                win: 7686,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 29,
                            play: 36,
                            win: 15,
                        },
                        {
                            champion_id: 161,
                            play: 168,
                            win: 75,
                        },
                        {
                            champion_id: 136,
                            play: 625,
                            win: 288,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 22,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.503652,
                pick_rate: 0.106553,
                ban_rate: 0.0303053,
                kda: 2.325293,
                tier: 3,
                rank: 36,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.518816,
                        pick_rate: 0.0691256,
                        role_rate: 0.654239,
                        ban_rate: 0.0198269,
                        kda: 2.396719,
                        tier_data: {
                            tier: 2,
                            rank: 8,
                            rank_prev: 8,
                            rank_prev_patch: 11,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.523471,
                                role_rate: 0.712529,
                                play: 24221,
                                win: 12679,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.507053,
                                role_rate: 0.264849,
                                play: 9003,
                                win: 4565,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.53186,
                                role_rate: 0.0226223,
                                play: 769,
                                win: 409,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 50,
                            play: 74,
                            win: 34,
                        },
                        {
                            champion_id: 115,
                            play: 167,
                            win: 77,
                        },
                        {
                            champion_id: 147,
                            play: 487,
                            win: 225,
                        },
                    ],
                },
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.475721,
                        pick_rate: 0.0354728,
                        role_rate: 0.331096,
                        ban_rate: 0.010034,
                        kda: 2.217712,
                        tier_data: {
                            tier: 5,
                            rank: 33,
                            rank_prev: 33,
                            rank_prev_patch: 30,
                        },
                    },
                    roles: [
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.489615,
                                role_rate: 0.625116,
                                play: 10737,
                                win: 5257,
                            },
                        },
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.446576,
                                role_rate: 0.218503,
                                play: 3753,
                                win: 1676,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.475126,
                                role_rate: 0.0807522,
                                play: 1387,
                                win: 659,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.447392,
                                role_rate: 0.0636353,
                                play: 1093,
                                win: 489,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.461165,
                                role_rate: 0.0119935,
                                play: 206,
                                win: 95,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 164,
                            play: 60,
                            win: 21,
                        },
                        {
                            champion_id: 26,
                            play: 190,
                            win: 70,
                        },
                        {
                            champion_id: 223,
                            play: 77,
                            win: 29,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 157,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.498939,
                pick_rate: 0.113974,
                ban_rate: 0.141175,
                kda: 1.720738,
                tier: 3,
                rank: 44,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.498387,
                        pick_rate: 0.0741209,
                        role_rate: 0.652344,
                        ban_rate: 0.0920946,
                        kda: 1.737665,
                        tier_data: {
                            tier: 2,
                            rank: 11,
                            rank_prev: 11,
                            rank_prev_patch: 7,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.50537,
                                role_rate: 0.773377,
                                play: 28120,
                                win: 14211,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.476897,
                                role_rate: 0.207728,
                                play: 7553,
                                win: 3602,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.486395,
                                role_rate: 0.0161716,
                                play: 588,
                                win: 286,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 85,
                            play: 108,
                            win: 41,
                        },
                        {
                            champion_id: 34,
                            play: 472,
                            win: 196,
                        },
                        {
                            champion_id: 950,
                            play: 300,
                            win: 127,
                        },
                    ],
                },
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.518832,
                        pick_rate: 0.0200092,
                        role_rate: 0.177046,
                        ban_rate: 0.0249945,
                        kda: 1.934418,
                        tier_data: {
                            tier: 3,
                            rank: 14,
                            rank_prev: 15,
                            rank_prev_patch: 16,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.519671,
                                role_rate: 0.851055,
                                play: 8388,
                                win: 4359,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.525526,
                                role_rate: 0.135146,
                                play: 1332,
                                win: 700,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.485294,
                                role_rate: 0.0137987,
                                play: 136,
                                win: 66,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 50,
                            play: 40,
                            win: 10,
                        },
                        {
                            champion_id: 235,
                            play: 178,
                            win: 72,
                        },
                        {
                            champion_id: 895,
                            play: 114,
                            win: 53,
                        },
                    ],
                },
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.483139,
                        pick_rate: 0.0190446,
                        role_rate: 0.166545,
                        ban_rate: 0.023512,
                        kda: 1.432249,
                        tier_data: {
                            tier: 5,
                            rank: 46,
                            rank_prev: 46,
                            rank_prev_patch: 48,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.509041,
                                role_rate: 0.671647,
                                play: 6249,
                                win: 3181,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.435182,
                                role_rate: 0.29267,
                                play: 2723,
                                win: 1185,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.445312,
                                role_rate: 0.027515,
                                play: 256,
                                win: 114,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 106,
                            play: 64,
                            win: 23,
                        },
                        {
                            champion_id: 41,
                            play: 101,
                            win: 38,
                        },
                        {
                            champion_id: 69,
                            play: 58,
                            win: 23,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 245,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.503514,
                pick_rate: 0.0904996,
                ban_rate: 0.032869,
                kda: 2.387445,
                tier: 3,
                rank: 47,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.496625,
                        pick_rate: 0.0464872,
                        role_rate: 0.512226,
                        ban_rate: 0.0168364,
                        kda: 2.555786,
                        tier_data: {
                            tier: 3,
                            rank: 20,
                            rank_prev: 20,
                            rank_prev_patch: 20,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.497699,
                                role_rate: 0.99656,
                                play: 22598,
                                win: 11247,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 887,
                            play: 53,
                            win: 22,
                        },
                        {
                            champion_id: 120,
                            play: 339,
                            win: 148,
                        },
                        {
                            champion_id: 60,
                            play: 202,
                            win: 89,
                        },
                    ],
                },
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.511434,
                        pick_rate: 0.0414605,
                        role_rate: 0.459549,
                        ban_rate: 0.0151049,
                        kda: 2.225273,
                        tier_data: {
                            tier: 2,
                            rank: 13,
                            rank_prev: 13,
                            rank_prev_patch: 3,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.512461,
                                role_rate: 1,
                                play: 20343,
                                win: 10425,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 54,
                            play: 41,
                            win: 16,
                        },
                        {
                            champion_id: 10,
                            play: 61,
                            win: 24,
                        },
                        {
                            champion_id: 50,
                            play: 131,
                            win: 58,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 60,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.504135,
                pick_rate: 0.018675,
                ban_rate: 0.00384575,
                kda: 2.558954,
                tier: 5,
                rank: 135,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.505025,
                        pick_rate: 0.0174398,
                        role_rate: 0.93123,
                        ban_rate: 0.00358127,
                        kda: 2.595598,
                        tier_data: {
                            tier: 4,
                            rank: 32,
                            rank_prev: 32,
                            rank_prev_patch: 37,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.506016,
                                role_rate: 0.998822,
                                play: 8478,
                                win: 4290,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 19,
                            play: 124,
                            win: 51,
                        },
                        {
                            champion_id: 57,
                            play: 59,
                            win: 25,
                        },
                        {
                            champion_id: 421,
                            play: 47,
                            win: 20,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 62,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.492725,
                pick_rate: 0.0377076,
                ban_rate: 0.00407334,
                kda: 2.292083,
                tier: 5,
                rank: 126,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.487212,
                        pick_rate: 0.0227871,
                        role_rate: 0.602608,
                        ban_rate: 0.00245463,
                        kda: 2.506469,
                        tier_data: {
                            tier: 4,
                            rank: 43,
                            rank_prev: 43,
                            rank_prev_patch: 46,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.488269,
                                role_rate: 0.968605,
                                play: 10613,
                                win: 5182,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.497093,
                                role_rate: 0.0313955,
                                play: 344,
                                win: 171,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.422222,
                                role_rate: 0.0123029,
                                play: 135,
                                win: 57,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 887,
                            play: 30,
                            win: 10,
                        },
                        {
                            champion_id: 427,
                            play: 97,
                            win: 37,
                        },
                        {
                            champion_id: 28,
                            play: 350,
                            win: 143,
                        },
                    ],
                },
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.497159,
                        pick_rate: 0.0125571,
                        role_rate: 0.331914,
                        ban_rate: 0.001352,
                        kda: 1.951941,
                        tier_data: {
                            tier: 5,
                            rank: 48,
                            rank_prev: 48,
                            rank_prev_patch: 53,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.496071,
                                role_rate: 0.970813,
                                play: 5854,
                                win: 2904,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.537313,
                                role_rate: 0.0222222,
                                play: 134,
                                win: 72,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.517241,
                                role_rate: 0.0143849,
                                play: 87,
                                win: 45,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 19,
                            play: 43,
                            win: 14,
                        },
                        {
                            champion_id: 79,
                            play: 74,
                            win: 26,
                        },
                        {
                            champion_id: 14,
                            play: 98,
                            win: 37,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 516,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.485955,
                pick_rate: 0.0347245,
                ban_rate: 0.00600689,
                kda: 2.508933,
                tier: 5,
                rank: 145,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.487471,
                        pick_rate: 0.0333592,
                        role_rate: 0.957514,
                        ban_rate: 0.00575168,
                        kda: 2.514126,
                        tier_data: {
                            tier: 4,
                            rank: 37,
                            rank_prev: 38,
                            rank_prev_patch: 21,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.487691,
                                role_rate: 0.998709,
                                play: 16248,
                                win: 7924,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 4,
                            play: 119,
                            win: 47,
                        },
                        {
                            champion_id: 50,
                            play: 43,
                            win: 17,
                        },
                        {
                            champion_id: 233,
                            play: 62,
                            win: 25,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 61,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.470422,
                pick_rate: 0.0381994,
                ban_rate: 0.0097175,
                kda: 2.584021,
                tier: 5,
                rank: 162,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.470984,
                        pick_rate: 0.0360962,
                        role_rate: 0.947867,
                        ban_rate: 0.00921089,
                        kda: 2.590465,
                        tier_data: {
                            tier: 4,
                            rank: 48,
                            rank_prev: 48,
                            rank_prev_patch: 48,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.471336,
                                role_rate: 1,
                                play: 17705,
                                win: 8345,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 29,
                            play: 58,
                            win: 19,
                        },
                        {
                            champion_id: 950,
                            play: 153,
                            win: 60,
                        },
                        {
                            champion_id: 38,
                            play: 282,
                            win: 114,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 2,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.50239,
                pick_rate: 0.0250863,
                ban_rate: 0.0240271,
                kda: 1.749053,
                tier: 5,
                rank: 122,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.5045,
                        pick_rate: 0.0226554,
                        role_rate: 0.900122,
                        ban_rate: 0.0216273,
                        kda: 1.716414,
                        tier_data: {
                            tier: 4,
                            rank: 31,
                            rank_prev: 31,
                            rank_prev_patch: 23,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.509307,
                                role_rate: 0.953286,
                                play: 10530,
                                win: 5363,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.426559,
                                role_rate: 0.0449937,
                                play: 497,
                                win: 212,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 8,
                            play: 41,
                            win: 10,
                        },
                        {
                            champion_id: 166,
                            play: 42,
                            win: 15,
                        },
                        {
                            champion_id: 69,
                            play: 74,
                            win: 28,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 777,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.502534,
                pick_rate: 0.136317,
                ban_rate: 0.146625,
                kda: 1.715816,
                tier: 3,
                rank: 24,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.511025,
                        pick_rate: 0.0673445,
                        role_rate: 0.495558,
                        ban_rate: 0.0726612,
                        kda: 1.868682,
                        tier_data: {
                            tier: 2,
                            rank: 4,
                            rank_prev: 4,
                            rank_prev_patch: 9,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.526681,
                                role_rate: 0.677648,
                                play: 22338,
                                win: 11765,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.480279,
                                role_rate: 0.304575,
                                play: 10040,
                                win: 4822,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.494881,
                                role_rate: 0.017777,
                                play: 586,
                                win: 290,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 10,
                            play: 88,
                            win: 36,
                        },
                        {
                            champion_id: 69,
                            play: 367,
                            win: 162,
                        },
                        {
                            champion_id: 166,
                            play: 365,
                            win: 163,
                        },
                    ],
                },
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.494723,
                        pick_rate: 0.0662597,
                        role_rate: 0.484467,
                        ban_rate: 0.071035,
                        kda: 1.55853,
                        tier_data: {
                            tier: 3,
                            rank: 15,
                            rank_prev: 16,
                            rank_prev_patch: 25,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.522507,
                                role_rate: 0.61995,
                                play: 19994,
                                win: 10447,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.451135,
                                role_rate: 0.338842,
                                play: 10928,
                                win: 4930,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.44319,
                                role_rate: 0.041208,
                                play: 1329,
                                win: 589,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 233,
                            play: 146,
                            win: 59,
                        },
                        {
                            champion_id: 114,
                            play: 969,
                            win: 401,
                        },
                        {
                            champion_id: 67,
                            play: 287,
                            win: 124,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 83,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.51468,
                pick_rate: 0.0538466,
                ban_rate: 0.0371258,
                kda: 1.560668,
                tier: 3,
                rank: 48,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.516978,
                        pick_rate: 0.0501958,
                        role_rate: 0.929127,
                        ban_rate: 0.0344946,
                        kda: 1.532657,
                        tier_data: {
                            tier: 3,
                            rank: 9,
                            rank_prev: 9,
                            rank_prev_patch: 51,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.514856,
                                role_rate: 0.652945,
                                play: 16020,
                                win: 8248,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.533611,
                                role_rate: 0.293458,
                                play: 7200,
                                win: 3842,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.457002,
                                role_rate: 0.0497656,
                                play: 1221,
                                win: 558,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 19,
                            play: 167,
                            win: 61,
                        },
                        {
                            champion_id: 233,
                            play: 119,
                            win: 48,
                        },
                        {
                            champion_id: 6,
                            play: 420,
                            win: 181,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 77,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.494196,
                pick_rate: 0.0521681,
                ban_rate: 0.0290982,
                kda: 2.195027,
                tier: 4,
                rank: 104,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.506678,
                        pick_rate: 0.0288375,
                        role_rate: 0.551223,
                        ban_rate: 0.0160396,
                        kda: 2.569391,
                        tier_data: {
                            tier: 3,
                            rank: 21,
                            rank_prev: 21,
                            rank_prev_patch: 22,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.491136,
                                role_rate: 0.570513,
                                play: 8010,
                                win: 3934,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.505429,
                                role_rate: 0.203348,
                                play: 2855,
                                win: 1443,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.554535,
                                role_rate: 0.186111,
                                play: 2613,
                                win: 1449,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.542222,
                                role_rate: 0.0320513,
                                play: 450,
                                win: 244,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 203,
                            play: 213,
                            win: 87,
                        },
                        {
                            champion_id: 163,
                            play: 121,
                            win: 51,
                        },
                        {
                            champion_id: 32,
                            play: 177,
                            win: 75,
                        },
                    ],
                },
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.478323,
                        pick_rate: 0.0226676,
                        role_rate: 0.433079,
                        ban_rate: 0.0126018,
                        kda: 1.764441,
                        tier_data: {
                            tier: 5,
                            rank: 50,
                            rank_prev: 51,
                            rank_prev_patch: 43,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.478003,
                                role_rate: 0.810838,
                                play: 8933,
                                win: 4270,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.508071,
                                role_rate: 0.106835,
                                play: 1177,
                                win: 598,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.44559,
                                role_rate: 0.0792412,
                                play: 873,
                                win: 389,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 4,
                            play: 68,
                            win: 24,
                        },
                        {
                            champion_id: 69,
                            play: 40,
                            win: 15,
                        },
                        {
                            champion_id: 67,
                            play: 93,
                            win: 35,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 6,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.530291,
                pick_rate: 0.0356227,
                ban_rate: 0.0062611,
                kda: 2.003556,
                tier: 3,
                rank: 31,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.530846,
                        pick_rate: 0.0342053,
                        role_rate: 0.957045,
                        ban_rate: 0.00599216,
                        kda: 1.991416,
                        tier_data: {
                            tier: 3,
                            rank: 7,
                            rank_prev: 7,
                            rank_prev_patch: 16,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.53613,
                                role_rate: 0.900649,
                                play: 14849,
                                win: 7961,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.477556,
                                role_rate: 0.0972888,
                                play: 1604,
                                win: 766,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.59751,
                                role_rate: 0.014584,
                                play: 241,
                                win: 144,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 10,
                            play: 252,
                            win: 103,
                        },
                        {
                            champion_id: 41,
                            play: 189,
                            win: 84,
                        },
                        {
                            champion_id: 223,
                            play: 173,
                            win: 78,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 19,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.519081,
                pick_rate: 0.0513857,
                ban_rate: 0.0110733,
                kda: 2.193305,
                tier: 3,
                rank: 42,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.517027,
                        pick_rate: 0.0334511,
                        role_rate: 0.649148,
                        ban_rate: 0.00718822,
                        kda: 2.386637,
                        tier_data: {
                            tier: 2,
                            rank: 15,
                            rank_prev: 15,
                            rank_prev_patch: 15,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.52345,
                                role_rate: 0.799323,
                                play: 12985,
                                win: 6797,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.493558,
                                role_rate: 0.200677,
                                play: 3260,
                                win: 1609,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 79,
                            play: 148,
                            win: 65,
                        },
                        {
                            champion_id: 120,
                            play: 207,
                            win: 96,
                        },
                        {
                            champion_id: 238,
                            play: 43,
                            win: 20,
                        },
                    ],
                },
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.521567,
                        pick_rate: 0.0164492,
                        role_rate: 0.319057,
                        ban_rate: 0.00353302,
                        kda: 1.832697,
                        tier_data: {
                            tier: 4,
                            rank: 25,
                            rank_prev: 25,
                            rank_prev_patch: 24,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.528296,
                                role_rate: 0.796324,
                                play: 6326,
                                win: 3342,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.495674,
                                role_rate: 0.203676,
                                play: 1618,
                                win: 802,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 75,
                            play: 87,
                            win: 34,
                        },
                        {
                            champion_id: 240,
                            play: 70,
                            win: 28,
                        },
                        {
                            champion_id: 85,
                            play: 32,
                            win: 13,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 350,
            is_rotation: true,
            is_rip: false,
            average_stats: {
                win_rate: 0.483603,
                pick_rate: 0.0310444,
                ban_rate: 0.0255087,
                kda: 4.564461,
                tier: 5,
                rank: 156,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.488772,
                        pick_rate: 0.0307549,
                        role_rate: 0.985272,
                        ban_rate: 0.025133,
                        kda: 4.619723,
                        tier_data: {
                            tier: 5,
                            rank: 29,
                            rank_prev: 29,
                            rank_prev_patch: 35,
                        },
                    },
                    roles: [
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.492021,
                                role_rate: 0.952524,
                                play: 14225,
                                win: 6999,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.448519,
                                role_rate: 0.0474756,
                                play: 709,
                                win: 318,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 111,
                            play: 571,
                            win: 241,
                        },
                        {
                            champion_id: 40,
                            play: 802,
                            win: 341,
                        },
                        {
                            champion_id: 57,
                            play: 962,
                            win: 417,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 39,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.504171,
                pick_rate: 0.0613857,
                ban_rate: 0.0750568,
                kda: 1.706064,
                tier: 4,
                rank: 69,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.497189,
                        pick_rate: 0.0330065,
                        role_rate: 0.535918,
                        ban_rate: 0.0402243,
                        kda: 1.597245,
                        tier_data: {
                            tier: 4,
                            rank: 28,
                            rank_prev: 29,
                            rank_prev_patch: 17,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.499116,
                                role_rate: 0.986416,
                                play: 15830,
                                win: 7901,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.441489,
                                role_rate: 0.0117149,
                                play: 188,
                                win: 83,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 157,
                            play: 113,
                            win: 44,
                        },
                        {
                            champion_id: 223,
                            play: 172,
                            win: 69,
                        },
                        {
                            champion_id: 233,
                            play: 65,
                            win: 27,
                        },
                    ],
                },
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.511699,
                        pick_rate: 0.0271866,
                        role_rate: 0.444253,
                        ban_rate: 0.0333442,
                        kda: 1.82311,
                        tier_data: {
                            tier: 3,
                            rank: 22,
                            rank_prev: 22,
                            rank_prev_patch: 14,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.512994,
                                role_rate: 0.983362,
                                play: 13121,
                                win: 6731,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.503356,
                                role_rate: 0.0111669,
                                play: 149,
                                win: 75,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 10,
                            play: 36,
                            win: 8,
                        },
                        {
                            champion_id: 166,
                            play: 134,
                            win: 54,
                        },
                        {
                            champion_id: 29,
                            play: 31,
                            win: 13,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 28,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.530352,
                pick_rate: 0.0742489,
                ban_rate: 0.244694,
                kda: 2.866653,
                tier: 2,
                rank: 13,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.531126,
                        pick_rate: 0.0741773,
                        role_rate: 0.996223,
                        ban_rate: 0.24377,
                        kda: 2.870423,
                        tier_data: {
                            tier: 1,
                            rank: 1,
                            rank_prev: 1,
                            rank_prev_patch: 4,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.533137,
                                role_rate: 0.993899,
                                play: 36002,
                                win: 19194,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 17,
                            play: 107,
                            win: 47,
                        },
                        {
                            champion_id: 421,
                            play: 227,
                            win: 106,
                        },
                        {
                            champion_id: 200,
                            play: 1100,
                            win: 528,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 81,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.490176,
                pick_rate: 0.189999,
                ban_rate: 0.0870547,
                kda: 2.346464,
                tier: 3,
                rank: 33,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.492668,
                        pick_rate: 0.179062,
                        role_rate: 0.950417,
                        ban_rate: 0.0827383,
                        kda: 2.371449,
                        tier_data: {
                            tier: 2,
                            rank: 9,
                            rank_prev: 9,
                            rank_prev_patch: 4,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.482255,
                                role_rate: 0.63158,
                                play: 55958,
                                win: 26986,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.514292,
                                role_rate: 0.33246,
                                play: 29456,
                                win: 15149,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.479835,
                                role_rate: 0.0246275,
                                play: 2182,
                                win: 1047,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 50,
                            play: 251,
                            win: 100,
                        },
                        {
                            champion_id: 30,
                            play: 216,
                            win: 97,
                        },
                        {
                            champion_id: 67,
                            play: 5907,
                            win: 2666,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 420,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.545155,
                pick_rate: 0.0728812,
                ban_rate: 0.114859,
                kda: 1.540923,
                tier: 1,
                rank: 3,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.543977,
                        pick_rate: 0.0708857,
                        role_rate: 0.969413,
                        ban_rate: 0.111345,
                        kda: 1.534899,
                        tier_data: {
                            tier: 1,
                            rank: 1,
                            rank_prev: 1,
                            rank_prev_patch: 12,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.562842,
                                role_rate: 0.654629,
                                play: 22660,
                                win: 12754,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.510019,
                                role_rate: 0.343146,
                                play: 11878,
                                win: 6058,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 133,
                            play: 181,
                            win: 81,
                        },
                        {
                            champion_id: 69,
                            play: 124,
                            win: 57,
                        },
                        {
                            champion_id: 950,
                            play: 95,
                            win: 44,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 59,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.48826,
                pick_rate: 0.029945,
                ban_rate: 0.00763887,
                kda: 3.160712,
                tier: 5,
                rank: 149,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.492484,
                        pick_rate: 0.027521,
                        role_rate: 0.916463,
                        ban_rate: 0.00700074,
                        kda: 3.249926,
                        tier_data: {
                            tier: 4,
                            rank: 35,
                            rank_prev: 35,
                            rank_prev_patch: 30,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.500603,
                                role_rate: 0.805456,
                                play: 10777,
                                win: 5395,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.455869,
                                role_rate: 0.159193,
                                play: 2130,
                                win: 971,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.496829,
                                role_rate: 0.0353513,
                                play: 473,
                                win: 235,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 57,
                            play: 106,
                            win: 37,
                        },
                        {
                            champion_id: 76,
                            play: 190,
                            win: 78,
                        },
                        {
                            champion_id: 48,
                            play: 68,
                            win: 29,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 498,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.489749,
                pick_rate: 0.0321153,
                ban_rate: 0.00616986,
                kda: 2.217503,
                tier: 5,
                rank: 142,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.489381,
                        pick_rate: 0.0315937,
                        role_rate: 0.992091,
                        ban_rate: 0.00612106,
                        kda: 2.221254,
                        tier_data: {
                            tier: 5,
                            rank: 26,
                            rank_prev: 26,
                            rank_prev_patch: 22,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.48998,
                                role_rate: 0.996085,
                                play: 15519,
                                win: 7604,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 50,
                            play: 43,
                            win: 17,
                        },
                        {
                            champion_id: 147,
                            play: 232,
                            win: 99,
                        },
                        {
                            champion_id: 222,
                            play: 576,
                            win: 257,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 143,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.528786,
                pick_rate: 0.0899367,
                ban_rate: 0.0941494,
                kda: 2.33713,
                tier: 2,
                rank: 12,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.529671,
                        pick_rate: 0.0856304,
                        role_rate: 0.946925,
                        ban_rate: 0.0891524,
                        kda: 2.328574,
                        tier_data: {
                            tier: 2,
                            rank: 3,
                            rank_prev: 3,
                            rank_prev_patch: 4,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.529978,
                                role_rate: 0.996094,
                                play: 41564,
                                win: 22028,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 164,
                            play: 182,
                            win: 83,
                        },
                        {
                            champion_id: 35,
                            play: 320,
                            win: 147,
                        },
                        {
                            champion_id: 57,
                            play: 2894,
                            win: 1381,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 154,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.505962,
                pick_rate: 0.100886,
                ban_rate: 0.0876863,
                kda: 3.094836,
                tier: 3,
                rank: 32,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.500998,
                        pick_rate: 0.0520892,
                        role_rate: 0.514865,
                        ban_rate: 0.0451466,
                        kda: 3.513936,
                        tier_data: {
                            tier: 3,
                            rank: 16,
                            rank_prev: 16,
                            rank_prev_patch: 16,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.500122,
                                role_rate: 0.96762,
                                play: 24594,
                                win: 12300,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.551129,
                                role_rate: 0.0296258,
                                play: 753,
                                win: 415,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 48,
                            play: 193,
                            win: 77,
                        },
                        {
                            champion_id: 91,
                            play: 187,
                            win: 79,
                        },
                        {
                            champion_id: 238,
                            play: 95,
                            win: 41,
                        },
                    ],
                },
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.510749,
                        pick_rate: 0.0380301,
                        role_rate: 0.37572,
                        ban_rate: 0.0329455,
                        kda: 2.633756,
                        tier_data: {
                            tier: 3,
                            rank: 16,
                            rank_prev: 15,
                            rank_prev_patch: 9,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.510697,
                                role_rate: 0.985336,
                                play: 18277,
                                win: 9334,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.570048,
                                role_rate: 0.0111596,
                                play: 207,
                                win: 118,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 82,
                            play: 629,
                            win: 264,
                        },
                        {
                            champion_id: 67,
                            play: 180,
                            win: 77,
                        },
                        {
                            champion_id: 19,
                            play: 157,
                            win: 69,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 40,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.529156,
                pick_rate: 0.120193,
                ban_rate: 0.0388956,
                kda: 3.337634,
                tier: 2,
                rank: 5,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.529661,
                        pick_rate: 0.120378,
                        role_rate: 0.996078,
                        ban_rate: 0.038743,
                        kda: 3.340289,
                        tier_data: {
                            tier: 1,
                            rank: 2,
                            rank_prev: 2,
                            rank_prev_patch: 5,
                        },
                    },
                    roles: [
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.530216,
                                role_rate: 0.941326,
                                play: 55253,
                                win: 29296,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.537997,
                                role_rate: 0.0535803,
                                play: 3145,
                                win: 1692,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 53,
                            play: 2573,
                            win: 1247,
                        },
                        {
                            champion_id: 143,
                            play: 2471,
                            win: 1208,
                        },
                        {
                            champion_id: 235,
                            play: 3474,
                            win: 1712,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 24,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.48849,
                pick_rate: 0.0907495,
                ban_rate: 0.194907,
                kda: 1.791479,
                tier: 4,
                rank: 82,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.48495,
                        pick_rate: 0.05378,
                        role_rate: 0.590667,
                        ban_rate: 0.115125,
                        kda: 1.55715,
                        tier_data: {
                            tier: 4,
                            rank: 26,
                            rank_prev: 26,
                            rank_prev_patch: 20,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.489117,
                                role_rate: 0.932092,
                                play: 24487,
                                win: 11977,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.422523,
                                role_rate: 0.0422519,
                                play: 1110,
                                win: 469,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.459902,
                                role_rate: 0.0232576,
                                play: 611,
                                win: 281,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 420,
                            play: 768,
                            win: 288,
                        },
                        {
                            champion_id: 43,
                            play: 136,
                            win: 54,
                        },
                        {
                            champion_id: 8,
                            play: 145,
                            win: 59,
                        },
                    ],
                },
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.495268,
                        pick_rate: 0.0335877,
                        role_rate: 0.369072,
                        ban_rate: 0.0719347,
                        kda: 2.191305,
                        tier_data: {
                            tier: 3,
                            rank: 25,
                            rank_prev: 25,
                            rank_prev_patch: 21,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.498619,
                                role_rate: 0.949658,
                                play: 15563,
                                win: 7760,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.40919,
                                role_rate: 0.0278863,
                                play: 457,
                                win: 187,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.467391,
                                role_rate: 0.0224555,
                                play: 368,
                                win: 172,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 17,
                            play: 44,
                            win: 18,
                        },
                        {
                            champion_id: 20,
                            play: 161,
                            win: 66,
                        },
                        {
                            champion_id: 113,
                            play: 133,
                            win: 56,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 238,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.500752,
                pick_rate: 0.0716051,
                ban_rate: 0.184579,
                kda: 2.251948,
                tier: 4,
                rank: 61,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.500975,
                        pick_rate: 0.0592372,
                        role_rate: 0.829838,
                        ban_rate: 0.15317,
                        kda: 2.240495,
                        tier_data: {
                            tier: 2,
                            rank: 12,
                            rank_prev: 12,
                            rank_prev_patch: 13,
                        },
                    },
                    roles: [
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.503245,
                                role_rate: 0.928392,
                                play: 26967,
                                win: 13571,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.483325,
                                role_rate: 0.0670981,
                                play: 1949,
                                win: 942,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 10,
                            play: 77,
                            win: 30,
                        },
                        {
                            champion_id: 34,
                            play: 415,
                            win: 170,
                        },
                        {
                            champion_id: 13,
                            play: 151,
                            win: 62,
                        },
                    ],
                },
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.503631,
                        pick_rate: 0.00869953,
                        role_rate: 0.121151,
                        ban_rate: 0.0223619,
                        kda: 2.447801,
                        tier_data: {
                            tier: 4,
                            rank: 41,
                            rank_prev: 41,
                            rank_prev_patch: 40,
                        },
                    },
                    roles: [
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.507494,
                                role_rate: 0.914894,
                                play: 3870,
                                win: 1964,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.488095,
                                role_rate: 0.0794326,
                                play: 336,
                                win: 164,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 203,
                            play: 48,
                            win: 15,
                        },
                        {
                            champion_id: 30,
                            play: 35,
                            win: 13,
                        },
                        {
                            champion_id: 9,
                            play: 50,
                            win: 20,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 101,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.49486,
                pick_rate: 0.0606805,
                ban_rate: 0.0375581,
                kda: 2.889857,
                tier: 4,
                rank: 96,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.490064,
                        pick_rate: 0.0304362,
                        role_rate: 0.498845,
                        ban_rate: 0.0187356,
                        kda: 2.637933,
                        tier_data: {
                            tier: 5,
                            rank: 28,
                            rank_prev: 28,
                            rank_prev_patch: 22,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.490635,
                                role_rate: 1,
                                play: 14789,
                                win: 7256,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 44,
                            play: 64,
                            win: 26,
                        },
                        {
                            champion_id: 57,
                            play: 858,
                            win: 366,
                        },
                        {
                            champion_id: 16,
                            play: 214,
                            win: 93,
                        },
                    ],
                },
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.49968,
                        pick_rate: 0.0285216,
                        role_rate: 0.471485,
                        ban_rate: 0.0177081,
                        kda: 3.221189,
                        tier_data: {
                            tier: 3,
                            rank: 34,
                            rank_prev: 34,
                            rank_prev_patch: 27,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.500179,
                                role_rate: 0.997791,
                                play: 14001,
                                win: 7003,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 13,
                            play: 65,
                            win: 26,
                        },
                        {
                            champion_id: 79,
                            play: 86,
                            win: 36,
                        },
                        {
                            champion_id: 91,
                            play: 100,
                            win: 43,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 221,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.492828,
                pick_rate: 0.0358442,
                ban_rate: 0.00353402,
                kda: 2.36664,
                tier: 5,
                rank: 130,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.49506,
                        pick_rate: 0.0338565,
                        role_rate: 0.952548,
                        ban_rate: 0.00336633,
                        kda: 2.38468,
                        tier_data: {
                            tier: 4,
                            rank: 22,
                            rank_prev: 22,
                            rank_prev_patch: 31,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.497888,
                                role_rate: 0.879501,
                                play: 14678,
                                win: 7308,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.48341,
                                role_rate: 0.117383,
                                play: 1959,
                                win: 947,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 29,
                            play: 579,
                            win: 247,
                        },
                        {
                            champion_id: 50,
                            play: 37,
                            win: 16,
                        },
                        {
                            champion_id: 67,
                            play: 1079,
                            win: 480,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 126,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.470325,
                pick_rate: 0.0227006,
                ban_rate: 0.00212273,
                kda: 1.854166,
                tier: 5,
                rank: 165,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.47228,
                        pick_rate: 0.0146734,
                        role_rate: 0.644257,
                        ban_rate: 0.00136759,
                        kda: 1.728765,
                        tier_data: {
                            tier: 5,
                            rank: 57,
                            rank_prev: 57,
                            rank_prev_patch: 57,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.444308,
                                role_rate: 0.573172,
                                play: 4085,
                                win: 1815,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.513149,
                                role_rate: 0.426828,
                                play: 3042,
                                win: 1561,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 75,
                            play: 81,
                            win: 26,
                        },
                        {
                            champion_id: 86,
                            play: 279,
                            win: 97,
                        },
                        {
                            champion_id: 2,
                            play: 70,
                            win: 25,
                        },
                    ],
                },
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.467192,
                        pick_rate: 0.00771839,
                        role_rate: 0.341062,
                        ban_rate: 0.000723982,
                        kda: 2.098123,
                        tier_data: {
                            tier: 5,
                            rank: 53,
                            rank_prev: 53,
                            rank_prev_patch: 52,
                        },
                    },
                    roles: [
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.471248,
                                role_rate: 0.568128,
                                play: 2139,
                                win: 1008,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.46556,
                                role_rate: 0.431873,
                                play: 1626,
                                win: 757,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 711,
                            play: 34,
                            win: 12,
                        },
                        {
                            champion_id: 127,
                            play: 36,
                            win: 13,
                        },
                        {
                            champion_id: 7,
                            play: 47,
                            win: 17,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 142,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.494975,
                pick_rate: 0.0206258,
                ban_rate: 0.00648748,
                kda: 2.573083,
                tier: 5,
                rank: 153,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.501503,
                        pick_rate: 0.0168447,
                        role_rate: 0.819212,
                        ban_rate: 0.00531462,
                        kda: 2.692326,
                        tier_data: {
                            tier: 4,
                            rank: 44,
                            rank_prev: 44,
                            rank_prev_patch: 46,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.502666,
                                role_rate: 1,
                                play: 8252,
                                win: 4148,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0,
                                role_rate: 0.0172414,
                                play: 1,
                                win: 0,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 950,
                            play: 82,
                            win: 31,
                        },
                        {
                            champion_id: 38,
                            play: 160,
                            win: 64,
                        },
                        {
                            champion_id: 69,
                            play: 99,
                            win: 40,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 115,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.498156,
                pick_rate: 0.0198333,
                ban_rate: 0.00223633,
                kda: 2.405225,
                tier: 5,
                rank: 146,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.51548,
                        pick_rate: 0.0113245,
                        role_rate: 0.57582,
                        ban_rate: 0.00128772,
                        kda: 2.423233,
                        tier_data: {
                            tier: 4,
                            rank: 23,
                            rank_prev: 23,
                            rank_prev_patch: 27,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.516302,
                                role_rate: 0.999463,
                                play: 5582,
                                win: 2882,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 18,
                            play: 61,
                            win: 24,
                        },
                        {
                            champion_id: 895,
                            play: 63,
                            win: 26,
                        },
                        {
                            champion_id: 4,
                            play: 60,
                            win: 25,
                        },
                    ],
                },
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.478237,
                        pick_rate: 0.00726056,
                        role_rate: 0.367213,
                        ban_rate: 0.000821208,
                        kda: 2.455195,
                        tier_data: {
                            tier: 5,
                            rank: 52,
                            rank_prev: 52,
                            rank_prev_patch: 54,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.478114,
                                role_rate: 1,
                                play: 3564,
                                win: 1704,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 69,
                            play: 38,
                            win: 13,
                        },
                        {
                            champion_id: 39,
                            play: 32,
                            win: 11,
                        },
                        {
                            champion_id: 245,
                            play: 59,
                            win: 23,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 202,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.506711,
                pick_rate: 0.150188,
                ban_rate: 0.0227408,
                kda: 2.841408,
                tier: 3,
                rank: 19,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.507587,
                        pick_rate: 0.145538,
                        role_rate: 0.977242,
                        ban_rate: 0.0222233,
                        kda: 2.853446,
                        tier_data: {
                            tier: 2,
                            rank: 7,
                            rank_prev: 7,
                            rank_prev_patch: 2,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.510374,
                                role_rate: 0.863375,
                                play: 61980,
                                win: 31633,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.495156,
                                role_rate: 0.133713,
                                play: 9599,
                                win: 4753,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 50,
                            play: 206,
                            win: 94,
                        },
                        {
                            champion_id: 29,
                            play: 2085,
                            win: 965,
                        },
                        {
                            champion_id: 67,
                            play: 4657,
                            win: 2166,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 26,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.513739,
                pick_rate: 0.0268461,
                ban_rate: 0.00647102,
                kda: 3.401437,
                tier: 4,
                rank: 95,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.515243,
                        pick_rate: 0.0243963,
                        role_rate: 0.903792,
                        ban_rate: 0.00584846,
                        kda: 3.403476,
                        tier_data: {
                            tier: 4,
                            rank: 19,
                            rank_prev: 19,
                            rank_prev_patch: 19,
                        },
                    },
                    roles: [
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.522124,
                                role_rate: 0.696001,
                                play: 8249,
                                win: 4307,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.497248,
                                role_rate: 0.260631,
                                play: 3089,
                                win: 1536,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.538911,
                                role_rate: 0.0433682,
                                play: 514,
                                win: 277,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 518,
                            play: 95,
                            win: 40,
                        },
                        {
                            champion_id: 164,
                            play: 44,
                            win: 19,
                        },
                        {
                            champion_id: 37,
                            play: 156,
                            win: 70,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 222,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.511826,
                pick_rate: 0.0720847,
                ban_rate: 0.00289412,
                kda: 2.319516,
                tier: 3,
                rank: 39,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.512185,
                        pick_rate: 0.0710278,
                        role_rate: 0.993685,
                        ban_rate: 0.00287584,
                        kda: 2.322178,
                        tier_data: {
                            tier: 2,
                            rank: 10,
                            rank_prev: 10,
                            rank_prev_patch: 10,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.512654,
                                role_rate: 0.99493,
                                play: 34930,
                                win: 17907,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 30,
                            play: 90,
                            win: 38,
                        },
                        {
                            champion_id: 115,
                            play: 187,
                            win: 85,
                        },
                        {
                            champion_id: 147,
                            play: 544,
                            win: 248,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 31,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.487769,
                pick_rate: 0.0233427,
                ban_rate: 0.00342836,
                kda: 2.091704,
                tier: 5,
                rank: 160,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.489724,
                        pick_rate: 0.0173606,
                        role_rate: 0.741273,
                        ban_rate: 0.00254135,
                        kda: 2.01378,
                        tier_data: {
                            tier: 5,
                            rank: 47,
                            rank_prev: 47,
                            rank_prev_patch: 39,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.48871,
                                role_rate: 0.913683,
                                play: 7706,
                                win: 3766,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.495879,
                                role_rate: 0.0863173,
                                play: 728,
                                win: 361,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 517,
                            play: 39,
                            win: 10,
                        },
                        {
                            champion_id: 233,
                            play: 33,
                            win: 11,
                        },
                        {
                            champion_id: 75,
                            play: 80,
                            win: 29,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 43,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.493355,
                pick_rate: 0.129973,
                ban_rate: 0.12013,
                kda: 2.574592,
                tier: 3,
                rank: 49,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.483117,
                        pick_rate: 0.0818708,
                        role_rate: 0.62647,
                        ban_rate: 0.0752581,
                        kda: 2.542565,
                        tier_data: {
                            tier: 4,
                            rank: 15,
                            rank_prev: 15,
                            rank_prev_patch: 9,
                        },
                    },
                    roles: [
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.497096,
                                role_rate: 0.547844,
                                play: 21865,
                                win: 10869,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.466728,
                                role_rate: 0.437148,
                                play: 17447,
                                win: 8143,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.475983,
                                role_rate: 0.0114755,
                                play: 458,
                                win: 218,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 57,
                            play: 2808,
                            win: 1214,
                        },
                        {
                            champion_id: 37,
                            play: 617,
                            win: 270,
                        },
                        {
                            champion_id: 555,
                            play: 1516,
                            win: 669,
                        },
                    ],
                },
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.512778,
                        pick_rate: 0.0338495,
                        role_rate: 0.261241,
                        ban_rate: 0.031383,
                        kda: 2.738195,
                        tier_data: {
                            tier: 2,
                            rank: 14,
                            rank_prev: 14,
                            rank_prev_patch: 4,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.512954,
                                role_rate: 0.98542,
                                play: 16288,
                                win: 8355,
                            },
                        },
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.540404,
                                role_rate: 0.0119789,
                                play: 198,
                                win: 107,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 163,
                            play: 159,
                            win: 66,
                        },
                        {
                            champion_id: 136,
                            play: 579,
                            win: 251,
                        },
                        {
                            champion_id: 131,
                            play: 249,
                            win: 108,
                        },
                    ],
                },
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.507023,
                        pick_rate: 0.0130648,
                        role_rate: 0.100188,
                        ban_rate: 0.0120356,
                        kda: 2.383781,
                        tier_data: {
                            tier: 4,
                            rank: 36,
                            rank_prev: 37,
                            rank_prev_patch: 30,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.510456,
                                role_rate: 0.862588,
                                play: 5499,
                                win: 2807,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.48736,
                                role_rate: 0.111686,
                                play: 712,
                                win: 347,
                            },
                        },
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.481707,
                                role_rate: 0.0257255,
                                play: 164,
                                win: 79,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 19,
                            play: 36,
                            win: 12,
                        },
                        {
                            champion_id: 6,
                            play: 95,
                            win: 38,
                        },
                        {
                            champion_id: 150,
                            play: 87,
                            win: 35,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 164,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.515081,
                pick_rate: 0.0346981,
                ban_rate: 0.0213001,
                kda: 1.992477,
                tier: 4,
                rank: 75,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.513571,
                        pick_rate: 0.0250897,
                        role_rate: 0.720703,
                        ban_rate: 0.015351,
                        kda: 1.906471,
                        tier_data: {
                            tier: 4,
                            rank: 23,
                            rank_prev: 23,
                            rank_prev_patch: 18,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.514211,
                                role_rate: 0.997793,
                                play: 12209,
                                win: 6278,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 233,
                            play: 56,
                            win: 21,
                        },
                        {
                            champion_id: 50,
                            play: 31,
                            win: 12,
                        },
                        {
                            champion_id: 85,
                            play: 54,
                            win: 21,
                        },
                    ],
                },
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.522352,
                        pick_rate: 0.0085469,
                        role_rate: 0.244978,
                        ban_rate: 0.00521805,
                        kda: 2.183599,
                        tier_data: {
                            tier: 5,
                            rank: 32,
                            rank_prev: 32,
                            rank_prev_patch: null,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.529428,
                                role_rate: 0.889505,
                                play: 3687,
                                win: 1952,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.520548,
                                role_rate: 0.0704463,
                                play: 292,
                                win: 152,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.42069,
                                role_rate: 0.0349819,
                                play: 145,
                                win: 61,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 201,
                            play: 55,
                            win: 19,
                        },
                        {
                            champion_id: 16,
                            play: 64,
                            win: 27,
                        },
                        {
                            champion_id: 161,
                            play: 44,
                            win: 19,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 38,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.530393,
                pick_rate: 0.0395812,
                ban_rate: 0.0623052,
                kda: 2.648998,
                tier: 3,
                rank: 27,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.53197,
                        pick_rate: 0.0373542,
                        role_rate: 0.946658,
                        ban_rate: 0.0589817,
                        kda: 2.668879,
                        tier_data: {
                            tier: 2,
                            rank: 3,
                            rank_prev: 3,
                            rank_prev_patch: 26,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.533154,
                                role_rate: 0.993353,
                                play: 18233,
                                win: 9721,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 18,
                            play: 282,
                            win: 133,
                        },
                        {
                            champion_id: 238,
                            play: 328,
                            win: 158,
                        },
                        {
                            champion_id: 166,
                            play: 169,
                            win: 82,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 30,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.500569,
                pick_rate: 0.026777,
                ban_rate: 0.0100268,
                kda: 2.289331,
                tier: 5,
                rank: 124,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.491564,
                        pick_rate: 0.0179962,
                        role_rate: 0.670183,
                        ban_rate: 0.00671978,
                        kda: 2.40538,
                        tier_data: {
                            tier: 4,
                            rank: 44,
                            rank_prev: 44,
                            rank_prev_patch: 42,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.492522,
                                role_rate: 1,
                                play: 8759,
                                win: 4314,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 79,
                            play: 95,
                            win: 37,
                        },
                        {
                            champion_id: 427,
                            play: 105,
                            win: 41,
                        },
                        {
                            champion_id: 20,
                            play: 119,
                            win: 49,
                        },
                    ],
                },
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.531422,
                        pick_rate: 0.0054829,
                        role_rate: 0.206496,
                        ban_rate: 0.00207049,
                        kda: 2.147808,
                        tier_data: {
                            tier: 4,
                            rank: 21,
                            rank_prev: 21,
                            rank_prev_patch: 26,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.532963,
                                role_rate: 0.997046,
                                play: 2700,
                                win: 1439,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 523,
                            play: 57,
                            win: 23,
                        },
                        {
                            champion_id: 498,
                            play: 31,
                            win: 14,
                        },
                        {
                            champion_id: 235,
                            play: 46,
                            win: 22,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 69,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.531454,
                pick_rate: 0.037923,
                ban_rate: 0.0242216,
                kda: 2.113003,
                tier: 3,
                rank: 28,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.531821,
                        pick_rate: 0.0267065,
                        role_rate: 0.706409,
                        ban_rate: 0.0171104,
                        kda: 2.177241,
                        tier_data: {
                            tier: 2,
                            rank: 9,
                            rank_prev: 9,
                            rank_prev_patch: 11,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.533491,
                                role_rate: 0.997866,
                                play: 13093,
                                win: 6985,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 163,
                            play: 103,
                            win: 44,
                        },
                        {
                            champion_id: 161,
                            play: 151,
                            win: 65,
                        },
                        {
                            champion_id: 950,
                            play: 96,
                            win: 42,
                        },
                    ],
                },
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.529462,
                        pick_rate: 0.00951518,
                        role_rate: 0.25008,
                        ban_rate: 0.00605735,
                        kda: 1.900903,
                        tier_data: {
                            tier: 4,
                            rank: 29,
                            rank_prev: 28,
                            rank_prev_patch: 40,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.532408,
                                role_rate: 0.996759,
                                play: 4613,
                                win: 2456,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 154,
                            play: 68,
                            win: 24,
                        },
                        {
                            champion_id: 39,
                            play: 74,
                            win: 31,
                        },
                        {
                            champion_id: 48,
                            play: 83,
                            win: 36,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 145,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.48328,
                pick_rate: 0.083314,
                ban_rate: 0.00647671,
                kda: 2.294833,
                tier: 4,
                rank: 106,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.483658,
                        pick_rate: 0.077496,
                        role_rate: 0.938047,
                        ban_rate: 0.00607546,
                        kda: 2.31043,
                        tier_data: {
                            tier: 4,
                            rank: 20,
                            rank_prev: 20,
                            rank_prev_patch: 21,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.476204,
                                role_rate: 0.765185,
                                play: 29227,
                                win: 13918,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.524155,
                                role_rate: 0.195099,
                                play: 7452,
                                win: 3906,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.445078,
                                role_rate: 0.0367054,
                                play: 1402,
                                win: 624,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 30,
                            play: 108,
                            win: 39,
                        },
                        {
                            champion_id: 50,
                            play: 94,
                            win: 37,
                        },
                        {
                            champion_id: 222,
                            play: 1223,
                            win: 536,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 121,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.51668,
                pick_rate: 0.067738,
                ban_rate: 0.0431699,
                kda: 2.554357,
                tier: 3,
                rank: 29,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.516892,
                        pick_rate: 0.0677398,
                        role_rate: 0.99721,
                        ban_rate: 0.0430495,
                        kda: 2.556018,
                        tier_data: {
                            tier: 2,
                            rank: 8,
                            rank_prev: 8,
                            rank_prev_patch: 11,
                        },
                    },
                    roles: [
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.519672,
                                role_rate: 0.952527,
                                play: 31441,
                                win: 16339,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.481356,
                                role_rate: 0.0446861,
                                play: 1475,
                                win: 710,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 60,
                            play: 278,
                            win: 128,
                        },
                        {
                            champion_id: 427,
                            play: 338,
                            win: 156,
                        },
                        {
                            champion_id: 76,
                            play: 608,
                            win: 281,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 55,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.506277,
                pick_rate: 0.0828731,
                ban_rate: 0.144523,
                kda: 2.356694,
                tier: 3,
                rank: 43,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.507903,
                        pick_rate: 0.0797243,
                        role_rate: 0.964985,
                        ban_rate: 0.139462,
                        kda: 2.369118,
                        tier_data: {
                            tier: 2,
                            rank: 5,
                            rank_prev: 5,
                            rank_prev_patch: 2,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.509085,
                                role_rate: 0.941823,
                                play: 36927,
                                win: 18799,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.484447,
                                role_rate: 0.0385381,
                                play: 1511,
                                win: 732,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.540486,
                                role_rate: 0.0125995,
                                play: 494,
                                win: 267,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 10,
                            play: 123,
                            win: 47,
                        },
                        {
                            champion_id: 85,
                            play: 98,
                            win: 40,
                        },
                        {
                            champion_id: 50,
                            play: 189,
                            win: 80,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 429,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.488397,
                pick_rate: 0.0288965,
                ban_rate: 0.00910848,
                kda: 2.203526,
                tier: 5,
                rank: 151,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.489895,
                        pick_rate: 0.0274185,
                        role_rate: 0.956892,
                        ban_rate: 0.00871583,
                        kda: 2.235415,
                        tier_data: {
                            tier: 5,
                            rank: 27,
                            rank_prev: 27,
                            rank_prev_patch: 20,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.4959,
                                role_rate: 0.670381,
                                play: 9024,
                                win: 4475,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.479661,
                                role_rate: 0.297675,
                                play: 4007,
                                win: 1922,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.498607,
                                role_rate: 0.0266696,
                                play: 359,
                                win: 179,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 895,
                            play: 137,
                            win: 53,
                        },
                        {
                            champion_id: 30,
                            play: 49,
                            win: 21,
                        },
                        {
                            champion_id: 50,
                            play: 30,
                            win: 13,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 85,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.49428,
                pick_rate: 0.0177646,
                ban_rate: 0.00461632,
                kda: 2.042838,
                tier: 5,
                rank: 159,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.492558,
                        pick_rate: 0.0119169,
                        role_rate: 0.668611,
                        ban_rate: 0.00308652,
                        kda: 1.952381,
                        tier_data: {
                            tier: 5,
                            rank: 52,
                            rank_prev: 52,
                            rank_prev_patch: 55,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.494477,
                                role_rate: 0.993035,
                                play: 5703,
                                win: 2820,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.409836,
                                role_rate: 0.0108831,
                                play: 61,
                                win: 25,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 4,
                            play: 53,
                            win: 16,
                        },
                        {
                            champion_id: 69,
                            play: 37,
                            win: 13,
                        },
                        {
                            champion_id: 6,
                            play: 91,
                            win: 35,
                        },
                    ],
                },
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.50153,
                        pick_rate: 0.00529551,
                        role_rate: 0.299016,
                        ban_rate: 0.00138035,
                        kda: 2.276983,
                        tier_data: {
                            tier: 5,
                            rank: 51,
                            rank_prev: 51,
                            rank_prev_patch: 49,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.503106,
                                role_rate: 0.996904,
                                play: 2576,
                                win: 1296,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 61,
                            play: 42,
                            win: 16,
                        },
                        {
                            champion_id: 245,
                            play: 47,
                            win: 18,
                        },
                        {
                            champion_id: 136,
                            play: 85,
                            win: 33,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 51,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.485593,
                pick_rate: 0.114671,
                ban_rate: 0.100892,
                kda: 2.129764,
                tier: 4,
                rank: 80,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.487571,
                        pick_rate: 0.110325,
                        role_rate: 0.970246,
                        ban_rate: 0.0978902,
                        kda: 2.147523,
                        tier_data: {
                            tier: 3,
                            rank: 16,
                            rank_prev: 16,
                            rank_prev_patch: 6,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.488412,
                                role_rate: 0.940064,
                                play: 51131,
                                win: 24973,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.484669,
                                role_rate: 0.0557629,
                                play: 3033,
                                win: 1470,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 30,
                            play: 99,
                            win: 31,
                        },
                        {
                            champion_id: 147,
                            play: 884,
                            win: 372,
                        },
                        {
                            champion_id: 115,
                            play: 279,
                            win: 121,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 141,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.50539,
                pick_rate: 0.092367,
                ban_rate: 0.0684043,
                kda: 2.259069,
                tier: 3,
                rank: 40,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.505686,
                        pick_rate: 0.090317,
                        role_rate: 0.975052,
                        ban_rate: 0.0666978,
                        kda: 2.285228,
                        tier_data: {
                            tier: 2,
                            rank: 11,
                            rank_prev: 11,
                            rank_prev_patch: 13,
                        },
                    },
                    roles: [
                        {
                            name: 'SLAYER|ASSASSIN',
                            stats: {
                                win_rate: 0.520154,
                                role_rate: 0.654388,
                                play: 28778,
                                win: 14969,
                            },
                        },
                        {
                            name: 'FIGHTER|SLAYER',
                            stats: {
                                win_rate: 0.489706,
                                role_rate: 0.189963,
                                play: 8354,
                                win: 4091,
                            },
                        },
                        {
                            name: 'SLAYER|SLAYER',
                            stats: {
                                win_rate: 0.497878,
                                role_rate: 0.11788,
                                play: 5184,
                                win: 2581,
                            },
                        },
                        {
                            name: 'FIGHTER|ASSASSIN',
                            stats: {
                                win_rate: 0.401361,
                                role_rate: 0.0133706,
                                play: 588,
                                win: 236,
                            },
                        },
                        {
                            name: 'TANK|SLAYER',
                            stats: {
                                win_rate: 0.452906,
                                role_rate: 0.0113468,
                                play: 499,
                                win: 226,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 33,
                            play: 410,
                            win: 184,
                        },
                        {
                            champion_id: 421,
                            play: 184,
                            win: 84,
                        },
                        {
                            champion_id: 427,
                            play: 452,
                            win: 207,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 10,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.522704,
                pick_rate: 0.0375471,
                ban_rate: 0.0155366,
                kda: 1.898665,
                tier: 3,
                rank: 50,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.522898,
                        pick_rate: 0.0306741,
                        role_rate: 0.814256,
                        ban_rate: 0.0126508,
                        kda: 1.842959,
                        tier_data: {
                            tier: 3,
                            rank: 12,
                            rank_prev: 12,
                            rank_prev_patch: 13,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.530364,
                                role_rate: 0.749799,
                                play: 11181,
                                win: 5930,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.530513,
                                role_rate: 0.179117,
                                play: 2671,
                                win: 1417,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.434906,
                                role_rate: 0.0710837,
                                play: 1060,
                                win: 461,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 166,
                            play: 62,
                            win: 21,
                        },
                        {
                            champion_id: 517,
                            play: 57,
                            win: 23,
                        },
                        {
                            champion_id: 8,
                            play: 62,
                            win: 26,
                        },
                    ],
                },
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.528646,
                        pick_rate: 0.00622333,
                        role_rate: 0.166261,
                        ban_rate: 0.00258313,
                        kda: 2.17771,
                        tier_data: {
                            tier: 4,
                            rank: 43,
                            rank_prev: 43,
                            rank_prev_patch: 44,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.529954,
                                role_rate: 0.853491,
                                play: 2604,
                                win: 1380,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.531447,
                                role_rate: 0.104228,
                                play: 318,
                                win: 169,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.496124,
                                role_rate: 0.0422812,
                                play: 129,
                                win: 64,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 34,
                            play: 48,
                            win: 20,
                        },
                        {
                            champion_id: 61,
                            play: 54,
                            win: 23,
                        },
                        {
                            champion_id: 134,
                            play: 63,
                            win: 27,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 96,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.507904,
                pick_rate: 0.0100264,
                ban_rate: 0.00112924,
                kda: 2.086928,
                tier: 5,
                rank: 157,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.510225,
                        pick_rate: 0.00778406,
                        role_rate: 0.782935,
                        ban_rate: 0.000884119,
                        kda: 2.106111,
                        tier_data: {
                            tier: 5,
                            rank: 29,
                            rank_prev: 29,
                            rank_prev_patch: 29,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.513819,
                                role_rate: 0.712424,
                                play: 2569,
                                win: 1320,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.501446,
                                role_rate: 0.287576,
                                play: 1037,
                                win: 520,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.507614,
                                role_rate: 0.0526456,
                                play: 197,
                                win: 100,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.538462,
                                role_rate: 0.0105348,
                                play: 39,
                                win: 21,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 235,
                            play: 58,
                            win: 21,
                        },
                        {
                            champion_id: 498,
                            play: 44,
                            win: 18,
                        },
                        {
                            champion_id: 157,
                            play: 33,
                            win: 14,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 42,
            is_rotation: true,
            is_rip: false,
            average_stats: {
                win_rate: 0.477558,
                pick_rate: 0.0273907,
                ban_rate: 0.00467505,
                kda: 2.208862,
                tier: 5,
                rank: 163,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.479178,
                        pick_rate: 0.0251506,
                        role_rate: 0.921062,
                        ban_rate: 0.00430601,
                        kda: 2.230477,
                        tier_data: {
                            tier: 4,
                            rank: 49,
                            rank_prev: 49,
                            rank_prev_patch: 38,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.487169,
                                role_rate: 0.802302,
                                play: 9898,
                                win: 4822,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.434097,
                                role_rate: 0.169733,
                                play: 2094,
                                win: 909,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.533333,
                                role_rate: 0.0279647,
                                play: 345,
                                win: 184,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 10,
                            play: 33,
                            win: 11,
                        },
                        {
                            champion_id: 69,
                            play: 146,
                            win: 54,
                        },
                        {
                            champion_id: 161,
                            play: 135,
                            win: 51,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 133,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.51886,
                pick_rate: 0.0176163,
                ban_rate: 0.00923467,
                kda: 1.928988,
                tier: 4,
                rank: 102,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.511233,
                        pick_rate: 0.01334,
                        role_rate: 0.754758,
                        ban_rate: 0.00696995,
                        kda: 1.859033,
                        tier_data: {
                            tier: 4,
                            rank: 35,
                            rank_prev: 35,
                            rank_prev_patch: 28,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.515159,
                                role_rate: 0.624442,
                                play: 4057,
                                win: 2090,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.530114,
                                role_rate: 0.296445,
                                play: 1926,
                                win: 1021,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.418288,
                                role_rate: 0.0791134,
                                play: 514,
                                win: 215,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 54,
                            play: 252,
                            win: 94,
                        },
                        {
                            champion_id: 39,
                            play: 134,
                            win: 53,
                        },
                        {
                            champion_id: 223,
                            play: 64,
                            win: 26,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 897,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.478284,
                pick_rate: 0.0566143,
                ban_rate: 0.0503997,
                kda: 2.041267,
                tier: 5,
                rank: 137,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.479001,
                        pick_rate: 0.0536903,
                        role_rate: 0.945226,
                        ban_rate: 0.0476391,
                        kda: 2.036062,
                        tier_data: {
                            tier: 4,
                            rank: 33,
                            rank_prev: 33,
                            rank_prev_patch: 35,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.479977,
                                role_rate: 0.994512,
                                play: 26095,
                                win: 12525,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 420,
                            play: 899,
                            win: 361,
                        },
                        {
                            champion_id: 2,
                            play: 338,
                            win: 145,
                        },
                        {
                            champion_id: 41,
                            play: 261,
                            win: 112,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 240,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.524804,
                pick_rate: 0.0228571,
                ban_rate: 0.00741005,
                kda: 2.195434,
                tier: 4,
                rank: 73,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.526623,
                        pick_rate: 0.0209448,
                        role_rate: 0.913318,
                        ban_rate: 0.00676773,
                        kda: 2.167382,
                        tier_data: {
                            tier: 3,
                            rank: 17,
                            rank_prev: 17,
                            rank_prev_patch: 22,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.513918,
                                role_rate: 0.787786,
                                play: 8011,
                                win: 4117,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.582024,
                                role_rate: 0.200216,
                                play: 2036,
                                win: 1185,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.47541,
                                role_rate: 0.0119972,
                                play: 122,
                                win: 58,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 69,
                            play: 34,
                            win: 11,
                        },
                        {
                            champion_id: 54,
                            play: 328,
                            win: 138,
                        },
                        {
                            champion_id: 4,
                            play: 83,
                            win: 37,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 246,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.508533,
                pick_rate: 0.0445355,
                ban_rate: 0.015433,
                kda: 2.226052,
                tier: 4,
                rank: 79,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.509512,
                        pick_rate: 0.038122,
                        role_rate: 0.858642,
                        ban_rate: 0.0132514,
                        kda: 2.227009,
                        tier_data: {
                            tier: 3,
                            rank: 17,
                            rank_prev: 16,
                            rank_prev_patch: 17,
                        },
                    },
                    roles: [
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.512828,
                                role_rate: 0.976341,
                                play: 18281,
                                win: 9375,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.436261,
                                role_rate: 0.0188528,
                                play: 353,
                                win: 154,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 29,
                            play: 53,
                            win: 21,
                        },
                        {
                            champion_id: 85,
                            play: 39,
                            win: 17,
                        },
                        {
                            champion_id: 161,
                            play: 152,
                            win: 67,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 203,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.505991,
                pick_rate: 0.032221,
                ban_rate: 0.0124787,
                kda: 2.221348,
                tier: 4,
                rank: 101,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.506839,
                        pick_rate: 0.0317353,
                        role_rate: 0.982152,
                        ban_rate: 0.012256,
                        kda: 2.228242,
                        tier_data: {
                            tier: 3,
                            rank: 18,
                            rank_prev: 18,
                            rank_prev_patch: 32,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.503522,
                                role_rate: 0.614564,
                                play: 9511,
                                win: 4789,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.515255,
                                role_rate: 0.376971,
                                play: 5834,
                                win: 3006,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 887,
                            play: 38,
                            win: 12,
                        },
                        {
                            champion_id: 163,
                            play: 122,
                            win: 47,
                        },
                        {
                            champion_id: 427,
                            play: 179,
                            win: 77,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 44,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.521388,
                pick_rate: 0.0153444,
                ban_rate: 0.00225157,
                kda: 2.858592,
                tier: 4,
                rank: 103,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.522578,
                        pick_rate: 0.0142986,
                        role_rate: 0.926765,
                        ban_rate: 0.00208667,
                        kda: 2.861741,
                        tier_data: {
                            tier: 4,
                            rank: 24,
                            rank_prev: 24,
                            rank_prev_patch: 26,
                        },
                    },
                    roles: [
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.522838,
                                role_rate: 0.504859,
                                play: 3481,
                                win: 1820,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.523726,
                                role_rate: 0.495141,
                                play: 3414,
                                win: 1788,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 50,
                            play: 66,
                            win: 25,
                        },
                        {
                            champion_id: 40,
                            play: 349,
                            win: 138,
                        },
                        {
                            champion_id: 518,
                            play: 60,
                            win: 25,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 91,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.502195,
                pick_rate: 0.0439767,
                ban_rate: 0.0151493,
                kda: 2.260082,
                tier: 4,
                rank: 97,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.50831,
                        pick_rate: 0.0257179,
                        role_rate: 0.586618,
                        ban_rate: 0.00888685,
                        kda: 2.205131,
                        tier_data: {
                            tier: 3,
                            rank: 28,
                            rank_prev: 27,
                            rank_prev_patch: 22,
                        },
                    },
                    roles: [
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.514235,
                                role_rate: 0.85982,
                                play: 10783,
                                win: 5545,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.484073,
                                role_rate: 0.14018,
                                play: 1758,
                                win: 851,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 42,
                            play: 109,
                            win: 45,
                        },
                        {
                            champion_id: 711,
                            play: 115,
                            win: 48,
                        },
                        {
                            champion_id: 80,
                            play: 86,
                            win: 36,
                        },
                    ],
                },
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.495842,
                        pick_rate: 0.0169079,
                        role_rate: 0.383393,
                        ban_rate: 0.00580813,
                        kda: 2.379593,
                        tier_data: {
                            tier: 4,
                            rank: 40,
                            rank_prev: 40,
                            rank_prev_patch: 35,
                        },
                    },
                    roles: [
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.496135,
                                role_rate: 0.907376,
                                play: 7504,
                                win: 3723,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.504951,
                                role_rate: 0.0854897,
                                play: 707,
                                win: 357,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 77,
                            play: 128,
                            win: 54,
                        },
                        {
                            champion_id: 19,
                            play: 102,
                            win: 45,
                        },
                        {
                            champion_id: 28,
                            play: 360,
                            win: 160,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 163,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.509469,
                pick_rate: 0.0391647,
                ban_rate: 0.00519588,
                kda: 2.433866,
                tier: 4,
                rank: 83,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.517143,
                        pick_rate: 0.018435,
                        role_rate: 0.472163,
                        ban_rate: 0.0024533,
                        kda: 2.400841,
                        tier_data: {
                            tier: 3,
                            rank: 27,
                            rank_prev: 28,
                            rank_prev_patch: 45,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.517581,
                                role_rate: 0.997463,
                                play: 9044,
                                win: 4681,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 1,
                            play: 46,
                            win: 18,
                        },
                        {
                            champion_id: 99,
                            play: 145,
                            win: 59,
                        },
                        {
                            champion_id: 38,
                            play: 137,
                            win: 58,
                        },
                    ],
                },
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.499887,
                        pick_rate: 0.0179819,
                        role_rate: 0.457843,
                        ban_rate: 0.00237889,
                        kda: 2.518377,
                        tier_data: {
                            tier: 4,
                            rank: 37,
                            rank_prev: 37,
                            rank_prev_patch: 45,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.5,
                                role_rate: 1,
                                play: 8784,
                                win: 4392,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 238,
                            play: 45,
                            win: 18,
                        },
                        {
                            champion_id: 11,
                            play: 221,
                            win: 92,
                        },
                        {
                            champion_id: 19,
                            play: 122,
                            win: 51,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 223,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.51472,
                pick_rate: 0.0376873,
                ban_rate: 0.0122401,
                kda: 2.531554,
                tier: 4,
                rank: 71,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.513482,
                        pick_rate: 0.024423,
                        role_rate: 0.645907,
                        ban_rate: 0.007906,
                        kda: 2.488126,
                        tier_data: {
                            tier: 4,
                            rank: 24,
                            rank_prev: 24,
                            rank_prev_patch: 14,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.513341,
                                role_rate: 0.982079,
                                play: 11618,
                                win: 5964,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.599057,
                                role_rate: 0.0179205,
                                play: 212,
                                win: 127,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 67,
                            play: 120,
                            win: 51,
                        },
                        {
                            champion_id: 420,
                            play: 386,
                            win: 167,
                        },
                        {
                            champion_id: 69,
                            play: 53,
                            win: 23,
                        },
                    ],
                },
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.511507,
                        pick_rate: 0.00941119,
                        role_rate: 0.248355,
                        ban_rate: 0.00303991,
                        kda: 2.544793,
                        tier_data: {
                            tier: 5,
                            rank: 34,
                            rank_prev: 34,
                            rank_prev_patch: 37,
                        },
                    },
                    roles: [
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.514756,
                                role_rate: 0.915007,
                                play: 4134,
                                win: 2128,
                            },
                        },
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.466146,
                                role_rate: 0.0849934,
                                play: 384,
                                win: 179,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.613636,
                                role_rate: 0.0102516,
                                play: 44,
                                win: 27,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 44,
                            play: 32,
                            win: 11,
                        },
                        {
                            champion_id: 518,
                            play: 33,
                            win: 12,
                        },
                        {
                            champion_id: 16,
                            play: 56,
                            win: 22,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 48,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.522197,
                pick_rate: 0.0730113,
                ban_rate: 0.137916,
                kda: 1.5494,
                tier: 3,
                rank: 18,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.523083,
                        pick_rate: 0.0581615,
                        role_rate: 0.793983,
                        ban_rate: 0.109503,
                        kda: 1.381196,
                        tier_data: {
                            tier: 2,
                            rank: 3,
                            rank_prev: 3,
                            rank_prev_patch: 1,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.526659,
                                role_rate: 0.951591,
                                play: 26970,
                                win: 14204,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.464018,
                                role_rate: 0.047068,
                                play: 1334,
                                win: 619,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 166,
                            play: 79,
                            win: 28,
                        },
                        {
                            champion_id: 126,
                            play: 155,
                            win: 67,
                        },
                        {
                            champion_id: 43,
                            play: 136,
                            win: 62,
                        },
                    ],
                },
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.522837,
                        pick_rate: 0.0118684,
                        role_rate: 0.162097,
                        ban_rate: 0.0223558,
                        kda: 2.502385,
                        tier_data: {
                            tier: 3,
                            rank: 19,
                            rank_prev: 19,
                            rank_prev_patch: 17,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.527916,
                                role_rate: 0.836533,
                                play: 4836,
                                win: 2553,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.497355,
                                role_rate: 0.163467,
                                play: 945,
                                win: 470,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 60,
                            play: 32,
                            win: 12,
                        },
                        {
                            champion_id: 9,
                            play: 66,
                            win: 25,
                        },
                        {
                            champion_id: 57,
                            play: 44,
                            win: 17,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 18,
            is_rotation: true,
            is_rip: false,
            average_stats: {
                win_rate: 0.50064,
                pick_rate: 0.0507903,
                ban_rate: 0.00731962,
                kda: 2.141978,
                tier: 4,
                rank: 90,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.493321,
                        pick_rate: 0.0298668,
                        role_rate: 0.593022,
                        ban_rate: 0.0043407,
                        kda: 2.224785,
                        tier_data: {
                            tier: 5,
                            rank: 24,
                            rank_prev: 24,
                            rank_prev_patch: 23,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.493832,
                                role_rate: 1,
                                play: 14673,
                                win: 7246,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 96,
                            play: 47,
                            win: 20,
                        },
                        {
                            champion_id: 895,
                            play: 132,
                            win: 58,
                        },
                        {
                            champion_id: 67,
                            play: 906,
                            win: 402,
                        },
                    ],
                },
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.511758,
                        pick_rate: 0.0187794,
                        role_rate: 0.370889,
                        ban_rate: 0.00271477,
                        kda: 2.04602,
                        tier_data: {
                            tier: 3,
                            rank: 32,
                            rank_prev: 31,
                            rank_prev_patch: 36,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.513021,
                                role_rate: 0.98361,
                                play: 9062,
                                win: 4649,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.476821,
                                role_rate: 0.0163899,
                                play: 151,
                                win: 72,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 34,
                            play: 112,
                            win: 44,
                        },
                        {
                            champion_id: 79,
                            play: 43,
                            win: 17,
                        },
                        {
                            champion_id: 115,
                            play: 34,
                            win: 14,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 23,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.492712,
                pick_rate: 0.0278845,
                ban_rate: 0.0232421,
                kda: 1.710233,
                tier: 5,
                rank: 141,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.490028,
                        pick_rate: 0.0237156,
                        role_rate: 0.84769,
                        ban_rate: 0.0197021,
                        kda: 1.673556,
                        tier_data: {
                            tier: 4,
                            rank: 43,
                            rank_prev: 44,
                            rank_prev_patch: 47,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.5044,
                                role_rate: 0.808363,
                                play: 9318,
                                win: 4700,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.431963,
                                role_rate: 0.189989,
                                play: 2190,
                                win: 946,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 62,
                            play: 44,
                            win: 14,
                        },
                        {
                            champion_id: 27,
                            play: 100,
                            win: 37,
                        },
                        {
                            champion_id: 78,
                            play: 117,
                            win: 45,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 4,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.52281,
                pick_rate: 0.141024,
                ban_rate: 0.0945028,
                kda: 2.133393,
                tier: 2,
                rank: 8,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.525688,
                        pick_rate: 0.0970816,
                        role_rate: 0.690539,
                        ban_rate: 0.0652578,
                        kda: 2.240517,
                        tier_data: {
                            tier: 1,
                            rank: 2,
                            rank_prev: 2,
                            rank_prev_patch: 1,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.52628,
                                role_rate: 0.732786,
                                play: 34970,
                                win: 18404,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.526206,
                                role_rate: 0.231088,
                                play: 11028,
                                win: 5803,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.523159,
                                role_rate: 0.0275973,
                                play: 1317,
                                win: 689,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 1,
                            play: 353,
                            win: 164,
                        },
                        {
                            champion_id: 238,
                            play: 1265,
                            win: 609,
                        },
                        {
                            champion_id: 131,
                            play: 824,
                            win: 399,
                        },
                    ],
                },
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.513644,
                        pick_rate: 0.0237028,
                        role_rate: 0.169501,
                        ban_rate: 0.0160183,
                        kda: 2.029629,
                        tier_data: {
                            tier: 3,
                            rank: 18,
                            rank_prev: 18,
                            rank_prev_patch: 18,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.514353,
                                role_rate: 0.94392,
                                play: 11008,
                                win: 5662,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.490991,
                                role_rate: 0.0380724,
                                play: 444,
                                win: 218,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.57619,
                                role_rate: 0.0180072,
                                play: 210,
                                win: 121,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 895,
                            play: 112,
                            win: 40,
                        },
                        {
                            champion_id: 157,
                            play: 101,
                            win: 43,
                        },
                        {
                            champion_id: 147,
                            play: 196,
                            win: 86,
                        },
                    ],
                },
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.53264,
                        pick_rate: 0.0168651,
                        role_rate: 0.119197,
                        ban_rate: 0.0112644,
                        kda: 1.769659,
                        tier_data: {
                            tier: 3,
                            rank: 13,
                            rank_prev: 13,
                            rank_prev_patch: 36,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.541894,
                                role_rate: 0.761521,
                                play: 6230,
                                win: 3376,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.541531,
                                role_rate: 0.150104,
                                play: 1228,
                                win: 665,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.453638,
                                role_rate: 0.0856863,
                                play: 701,
                                win: 318,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 24,
                            play: 199,
                            win: 75,
                        },
                        {
                            champion_id: 80,
                            play: 86,
                            win: 34,
                        },
                        {
                            champion_id: 43,
                            play: 59,
                            win: 24,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 29,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.521136,
                pick_rate: 0.0853766,
                ban_rate: 0.0520144,
                kda: 2.359155,
                tier: 3,
                rank: 16,
            },
            positions: [
                {
                    name: 'ADC',
                    stats: {
                        win_rate: 0.528962,
                        pick_rate: 0.0679408,
                        role_rate: 0.802518,
                        ban_rate: 0.0417425,
                        kda: 2.441261,
                        tier_data: {
                            tier: 1,
                            rank: 6,
                            rank_prev: 6,
                            rank_prev_patch: 7,
                        },
                    },
                    roles: [
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.533769,
                                role_rate: 0.678914,
                                play: 22802,
                                win: 12171,
                            },
                        },
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.535937,
                                role_rate: 0.166945,
                                play: 5607,
                                win: 3005,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.5034,
                                role_rate: 0.144495,
                                play: 4853,
                                win: 2443,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 96,
                            play: 123,
                            win: 56,
                        },
                        {
                            champion_id: 895,
                            play: 398,
                            win: 183,
                        },
                        {
                            champion_id: 235,
                            play: 599,
                            win: 283,
                        },
                    ],
                },
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.464304,
                        pick_rate: 0.00789919,
                        role_rate: 0.092017,
                        ban_rate: 0.00478621,
                        kda: 1.970675,
                        tier_data: {
                            tier: 5,
                            rank: 40,
                            rank_prev: 40,
                            rank_prev_patch: 41,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.469189,
                                role_rate: 0.920823,
                                play: 3489,
                                win: 1637,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.454545,
                                role_rate: 0.0580628,
                                play: 220,
                                win: 100,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.275,
                                role_rate: 0.0211137,
                                play: 80,
                                win: 22,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.52381,
                                role_rate: 0.0113729,
                                play: 42,
                                win: 22,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 350,
                            play: 48,
                            win: 18,
                        },
                        {
                            champion_id: 40,
                            play: 219,
                            win: 84,
                        },
                        {
                            champion_id: 497,
                            play: 115,
                            win: 45,
                        },
                    ],
                },
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.528783,
                        pick_rate: 0.0064401,
                        role_rate: 0.0756653,
                        ban_rate: 0.00393568,
                        kda: 2.237005,
                        tier_data: {
                            tier: 4,
                            rank: 40,
                            rank_prev: 40,
                            rank_prev_patch: 37,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.532194,
                                role_rate: 0.878275,
                                play: 2749,
                                win: 1463,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.521739,
                                role_rate: 0.0955272,
                                play: 299,
                                win: 156,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.463415,
                                role_rate: 0.0261981,
                                play: 82,
                                win: 38,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 55,
                            play: 127,
                            win: 53,
                        },
                        {
                            champion_id: 161,
                            play: 31,
                            win: 13,
                        },
                        {
                            champion_id: 777,
                            play: 95,
                            win: 40,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 17,
            is_rotation: true,
            is_rip: false,
            average_stats: {
                win_rate: 0.508214,
                pick_rate: 0.0487338,
                ban_rate: 0.0581069,
                kda: 1.823837,
                tier: 4,
                rank: 72,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.510693,
                        pick_rate: 0.031459,
                        role_rate: 0.643399,
                        ban_rate: 0.0373859,
                        kda: 1.737284,
                        tier_data: {
                            tier: 3,
                            rank: 21,
                            rank_prev: 21,
                            rank_prev_patch: 27,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.514564,
                                role_rate: 0.962446,
                                play: 14762,
                                win: 7596,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.415584,
                                role_rate: 0.0200808,
                                play: 308,
                                win: 128,
                            },
                        },
                        {
                            name: 'MARKSMAN',
                            stats: {
                                win_rate: 0.452229,
                                role_rate: 0.010236,
                                play: 157,
                                win: 71,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 233,
                            play: 65,
                            win: 25,
                        },
                        {
                            champion_id: 887,
                            play: 134,
                            win: 56,
                        },
                        {
                            champion_id: 54,
                            play: 481,
                            win: 203,
                        },
                    ],
                },
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.508041,
                        pick_rate: 0.00775003,
                        role_rate: 0.15816,
                        ban_rate: 0.0091902,
                        kda: 1.867492,
                        tier_data: {
                            tier: 5,
                            rank: 37,
                            rank_prev: 37,
                            rank_prev_patch: 36,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.510275,
                                role_rate: 0.996808,
                                play: 3747,
                                win: 1912,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 57,
                            play: 234,
                            win: 96,
                        },
                        {
                            champion_id: 432,
                            play: 165,
                            win: 69,
                        },
                        {
                            champion_id: 40,
                            play: 212,
                            win: 90,
                        },
                    ],
                },
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.515073,
                        pick_rate: 0.00628673,
                        role_rate: 0.128638,
                        ban_rate: 0.00747476,
                        kda: 2.1906,
                        tier_data: {
                            tier: 4,
                            rank: 39,
                            rank_prev: 39,
                            rank_prev_patch: 31,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.517639,
                                role_rate: 0.996714,
                                play: 3033,
                                win: 1570,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 20,
                            play: 37,
                            win: 12,
                        },
                        {
                            champion_id: 63,
                            play: 127,
                            win: 53,
                        },
                        {
                            champion_id: 77,
                            play: 41,
                            win: 18,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 555,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.506482,
                pick_rate: 0.0841716,
                ban_rate: 0.142247,
                kda: 2.264115,
                tier: 3,
                rank: 41,
            },
            positions: [
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.507534,
                        pick_rate: 0.0816358,
                        role_rate: 0.964583,
                        ban_rate: 0.137209,
                        kda: 2.258762,
                        tier_data: {
                            tier: 3,
                            rank: 7,
                            rank_prev: 7,
                            rank_prev_patch: 15,
                        },
                    },
                    roles: [
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.508087,
                                role_rate: 0.962431,
                                play: 38273,
                                win: 19446,
                            },
                        },
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.525153,
                                role_rate: 0.0204944,
                                play: 815,
                                win: 428,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.466165,
                                role_rate: 0.0100334,
                                play: 399,
                                win: 186,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 201,
                            play: 595,
                            win: 261,
                        },
                        {
                            champion_id: 57,
                            play: 2937,
                            win: 1301,
                        },
                        {
                            champion_id: 16,
                            play: 657,
                            win: 293,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 80,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.497594,
                pick_rate: 0.0565858,
                ban_rate: 0.0193927,
                kda: 2.07402,
                tier: 4,
                rank: 92,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.494496,
                        pick_rate: 0.0222272,
                        role_rate: 0.39151,
                        ban_rate: 0.00759246,
                        kda: 1.979879,
                        tier_data: {
                            tier: 4,
                            rank: 41,
                            rank_prev: 41,
                            rank_prev_patch: 41,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.493006,
                                role_rate: 0.920434,
                                play: 9937,
                                win: 4899,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.520966,
                                role_rate: 0.0728974,
                                play: 787,
                                win: 410,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 31,
                            play: 70,
                            win: 25,
                        },
                        {
                            champion_id: 106,
                            play: 95,
                            win: 37,
                        },
                        {
                            champion_id: 950,
                            play: 38,
                            win: 15,
                        },
                    ],
                },
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.497667,
                        pick_rate: 0.0205816,
                        role_rate: 0.36174,
                        ban_rate: 0.00701512,
                        kda: 2.021909,
                        tier_data: {
                            tier: 5,
                            rank: 31,
                            rank_prev: 31,
                            rank_prev_patch: 27,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.511506,
                                role_rate: 0.556014,
                                play: 5519,
                                win: 2823,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.481472,
                                role_rate: 0.413258,
                                play: 4102,
                                win: 1975,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.459227,
                                role_rate: 0.0234737,
                                play: 233,
                                win: 107,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 161,
                            play: 71,
                            win: 28,
                        },
                        {
                            champion_id: 57,
                            play: 653,
                            win: 286,
                        },
                        {
                            champion_id: 888,
                            play: 98,
                            win: 43,
                        },
                    ],
                },
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.510187,
                        pick_rate: 0.00984348,
                        role_rate: 0.174495,
                        ban_rate: 0.00338394,
                        kda: 2.325391,
                        tier_data: {
                            tier: 4,
                            rank: 46,
                            rank_prev: 46,
                            rank_prev_patch: 43,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.511095,
                                role_rate: 0.868272,
                                play: 4146,
                                win: 2119,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.503975,
                                role_rate: 0.131728,
                                play: 629,
                                win: 317,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 34,
                            play: 32,
                            win: 11,
                        },
                        {
                            champion_id: 136,
                            play: 145,
                            win: 51,
                        },
                        {
                            champion_id: 131,
                            play: 83,
                            win: 32,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 9,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.501033,
                pick_rate: 0.0314853,
                ban_rate: 0.0160255,
                kda: 2.469421,
                tier: 5,
                rank: 116,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.50069,
                        pick_rate: 0.0265897,
                        role_rate: 0.842132,
                        ban_rate: 0.0134956,
                        kda: 2.566678,
                        tier_data: {
                            tier: 3,
                            rank: 30,
                            rank_prev: 30,
                            rank_prev_patch: 26,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.501627,
                                role_rate: 0.998608,
                                play: 12910,
                                win: 6476,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 57,
                            play: 88,
                            win: 38,
                        },
                        {
                            champion_id: 113,
                            play: 99,
                            win: 44,
                        },
                        {
                            champion_id: 887,
                            play: 40,
                            win: 18,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 114,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.521668,
                pick_rate: 0.063117,
                ban_rate: 0.141445,
                kda: 1.597971,
                tier: 3,
                rank: 21,
            },
            positions: [
                {
                    name: 'TOP',
                    stats: {
                        win_rate: 0.521515,
                        pick_rate: 0.0609791,
                        role_rate: 0.962943,
                        ban_rate: 0.136204,
                        kda: 1.591697,
                        tier_data: {
                            tier: 2,
                            rank: 4,
                            rank_prev: 4,
                            rank_prev_patch: 6,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.522464,
                                role_rate: 0.998214,
                                play: 29625,
                                win: 15478,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 50,
                            play: 44,
                            win: 18,
                        },
                        {
                            champion_id: 166,
                            play: 153,
                            win: 68,
                        },
                        {
                            champion_id: 69,
                            play: 113,
                            win: 52,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 105,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.51137,
                pick_rate: 0.0487033,
                ban_rate: 0.219347,
                kda: 2.390463,
                tier: 4,
                rank: 57,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.511903,
                        pick_rate: 0.0470579,
                        role_rate: 0.969208,
                        ban_rate: 0.212592,
                        kda: 2.400946,
                        tier_data: {
                            tier: 2,
                            rank: 10,
                            rank_prev: 10,
                            rank_prev_patch: 8,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.512747,
                                role_rate: 0.996285,
                                play: 23064,
                                win: 11826,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 517,
                            play: 717,
                            win: 315,
                        },
                        {
                            champion_id: 34,
                            play: 254,
                            win: 114,
                        },
                        {
                            champion_id: 8,
                            play: 481,
                            win: 217,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 74,
            is_rotation: false,
            is_rip: true,
            average_stats: {
                win_rate: 0.503249,
                pick_rate: 0.0128205,
                ban_rate: 0.00258199,
                kda: 1.943958,
                tier: 5,
                rank: 155,
            },
            positions: [],
            roles: [],
        },
        {
            id: 120,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.502225,
                pick_rate: 0.0328794,
                ban_rate: 0.0248619,
                kda: 2.604184,
                tier: 4,
                rank: 112,
            },
            positions: [
                {
                    name: 'JUNGLE',
                    stats: {
                        win_rate: 0.502635,
                        pick_rate: 0.0328683,
                        role_rate: 0.996848,
                        ban_rate: 0.0247836,
                        kda: 2.608681,
                        tier_data: {
                            tier: 3,
                            rank: 22,
                            rank_prev: 22,
                            rank_prev_patch: 28,
                        },
                    },
                    roles: [
                        {
                            name: 'FIGHTER',
                            stats: {
                                win_rate: 0.500863,
                                role_rate: 0.869103,
                                play: 13910,
                                win: 6967,
                            },
                        },
                        {
                            name: 'SLAYER',
                            stats: {
                                win_rate: 0.548694,
                                role_rate: 0.105217,
                                play: 1684,
                                win: 924,
                            },
                        },
                        {
                            name: 'TANK',
                            stats: {
                                win_rate: 0.438776,
                                role_rate: 0.0244923,
                                play: 392,
                                win: 172,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 238,
                            play: 56,
                            win: 22,
                        },
                        {
                            champion_id: 163,
                            play: 147,
                            win: 62,
                        },
                        {
                            champion_id: 57,
                            play: 133,
                            win: 57,
                        },
                    ],
                },
            ],
            roles: [],
        },
        {
            id: 910,
            is_rotation: false,
            is_rip: false,
            average_stats: {
                win_rate: 0.470492,
                pick_rate: 0.131534,
                ban_rate: 0.143815,
                kda: 2.368134,
                tier: 4,
                rank: 105,
            },
            positions: [
                {
                    name: 'MID',
                    stats: {
                        win_rate: 0.471653,
                        pick_rate: 0.0944419,
                        role_rate: 0.720229,
                        ban_rate: 0.10358,
                        kda: 2.42279,
                        tier_data: {
                            tier: 3,
                            rank: 26,
                            rank_prev: 26,
                            rank_prev_patch: 33,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.471592,
                                role_rate: 0.997868,
                                play: 46343,
                                win: 21855,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 29,
                            play: 162,
                            win: 61,
                        },
                        {
                            champion_id: 91,
                            play: 507,
                            win: 212,
                        },
                        {
                            champion_id: 161,
                            play: 622,
                            win: 266,
                        },
                    ],
                },
                {
                    name: 'SUPPORT',
                    stats: {
                        win_rate: 0.45671,
                        pick_rate: 0.0261719,
                        role_rate: 0.19789,
                        ban_rate: 0.0284596,
                        kda: 2.21347,
                        tier_data: {
                            tier: 5,
                            rank: 39,
                            rank_prev: 39,
                            rank_prev_patch: 39,
                        },
                    },
                    roles: [
                        {
                            name: 'MAGE',
                            stats: {
                                win_rate: 0.458023,
                                role_rate: 0.984478,
                                play: 12495,
                                win: 5723,
                            },
                        },
                        {
                            name: 'CONTROLLER',
                            stats: {
                                win_rate: 0.431472,
                                role_rate: 0.0155216,
                                play: 197,
                                win: 85,
                            },
                        },
                    ],
                    counters: [
                        {
                            champion_id: 35,
                            play: 94,
                            win: 33,
                        },
                        {
                            champion_id: 161,
                            play: 115,
                            win: 42,
                        },
                        {
                            champion_id: 89,
                            play: 267,
                            win: 107,
                        },
                    ],
                },
            ],
            roles: [],
        },
    ]

const champDatas = [
    {
        id: -1,
        name: 'None',
        squarePortraitPath: '/out/-1.png',
        roles: [],
        bannerUrl: '/banners/-1/-1000.jpg',
    },
    {
        id: 1,
        name: 'Annie',
        squarePortraitPath: '/out/1.png',
        roles: ['mage'],
        bannerUrl: '/banners/1/1000.jpg',
    },
    {
        id: 2,
        name: 'Olaf',
        squarePortraitPath: '/out/2.png',
        roles: ['fighter', 'tank'],
        bannerUrl: '/banners/2/2000.jpg',
    },
    {
        id: 3,
        name: 'Galio',
        squarePortraitPath: '/out/3.png',
        roles: ['tank', 'mage'],
        bannerUrl: '/banners/3/3000.jpg',
    },
    {
        id: 4,
        name: 'Twisted Fate',
        squarePortraitPath: '/out/4.png',
        roles: ['mage'],
        bannerUrl: '/banners/4/4000.jpg',
    },
    {
        id: 5,
        name: 'Xin Zhao',
        squarePortraitPath: '/out/5.png',
        roles: ['fighter', 'assassin'],
        bannerUrl: '/banners/5/5000.jpg',
    },
    {
        id: 6,
        name: 'Urgot',
        squarePortraitPath: '/out/6.png',
        roles: ['fighter', 'tank'],
        bannerUrl: '/banners/6/6000.jpg',
    },
    {
        id: 7,
        name: 'LeBlanc',
        squarePortraitPath: '/out/7.png',
        roles: ['assassin', 'mage'],
        bannerUrl: '/banners/7/7000.jpg',
    },
    {
        id: 8,
        name: 'Vladimir',
        squarePortraitPath: '/out/8.png',
        roles: ['mage'],
        bannerUrl: '/banners/8/8000.jpg',
    },
    {
        id: 9,
        name: 'Fiddlesticks',
        squarePortraitPath: '/out/9.png',
        roles: ['mage', 'support'],
        bannerUrl: '/banners/9/9000.jpg',
    },
    {
        id: 10,
        name: 'Kayle',
        squarePortraitPath: '/out/10.png',
        roles: ['fighter', 'support'],
        bannerUrl: '/banners/10/10000.jpg',
    },
    {
        id: 11,
        name: 'Master Yi',
        squarePortraitPath: '/out/11.png',
        roles: ['assassin', 'fighter'],
        bannerUrl: '/banners/11/11000.jpg',
    },
    {
        id: 12,
        name: 'Alistar',
        squarePortraitPath: '/out/12.png',
        roles: ['tank', 'support'],
        bannerUrl: '/banners/12/12000.jpg',
    },
    {
        id: 13,
        name: 'Ryze',
        squarePortraitPath: '/out/13.png',
        roles: ['mage', 'fighter'],
        bannerUrl: '/banners/13/13000.jpg',
    },
    {
        id: 14,
        name: 'Sion',
        squarePortraitPath: '/out/14.png',
        roles: ['tank', 'fighter'],
        bannerUrl: '/banners/14/14000.jpg',
    },
    {
        id: 15,
        name: 'Sivir',
        squarePortraitPath: '/out/15.png',
        roles: ['marksman'],
        bannerUrl: '/banners/15/15000.jpg',
    },
    {
        id: 16,
        name: 'Soraka',
        squarePortraitPath: '/out/16.png',
        roles: ['support', 'mage'],
        bannerUrl: '/banners/16/16000.jpg',
    },
    {
        id: 17,
        name: 'Teemo',
        squarePortraitPath: '/out/17.png',
        roles: ['marksman', 'assassin'],
        bannerUrl: '/banners/17/17000.jpg',
    },
    {
        id: 18,
        name: 'Tristana',
        squarePortraitPath: '/out/18.png',
        roles: ['marksman', 'assassin'],
        bannerUrl: '/banners/18/18000.jpg',
    },
    {
        id: 19,
        name: 'Warwick',
        squarePortraitPath: '/out/19.png',
        roles: ['fighter', 'tank'],
        bannerUrl: '/banners/19/19000.jpg',
    },
    {
        id: 20,
        name: 'Nunu & Willump',
        squarePortraitPath: '/out/20.png',
        roles: ['tank', 'fighter'],
        bannerUrl: '/banners/20/20000.jpg',
    },
    {
        id: 21,
        name: 'Miss Fortune',
        squarePortraitPath: '/out/21.png',
        roles: ['marksman'],
        bannerUrl: '/banners/21/21000.jpg',
    },
    {
        id: 22,
        name: 'Ashe',
        squarePortraitPath: '/out/22.png',
        roles: ['marksman', 'support'],
        bannerUrl: '/banners/22/22000.jpg',
    },
    {
        id: 23,
        name: 'Tryndamere',
        squarePortraitPath: '/out/23.png',
        roles: ['fighter', 'assassin'],
        bannerUrl: '/banners/23/23000.jpg',
    },
    {
        id: 24,
        name: 'Jax',
        squarePortraitPath: '/out/24.png',
        roles: ['fighter', 'assassin'],
        bannerUrl: '/banners/24/24000.jpg',
    },
    {
        id: 25,
        name: 'Morgana',
        squarePortraitPath: '/out/25.png',
        roles: ['mage', 'support'],
        bannerUrl: '/banners/25/25000.jpg',
    },
    {
        id: 26,
        name: 'Zilean',
        squarePortraitPath: '/out/26.png',
        roles: ['support', 'mage'],
        bannerUrl: '/banners/26/26000.jpg',
    },
    {
        id: 27,
        name: 'Singed',
        squarePortraitPath: '/out/27.png',
        roles: ['tank', 'fighter'],
        bannerUrl: '/banners/27/27000.jpg',
    },
    {
        id: 28,
        name: 'Evelynn',
        squarePortraitPath: '/out/28.png',
        roles: ['assassin', 'mage'],
        bannerUrl: '/banners/28/28000.jpg',
    },
    {
        id: 29,
        name: 'Twitch',
        squarePortraitPath: '/out/29.png',
        roles: ['marksman', 'assassin'],
        bannerUrl: '/banners/29/29000.jpg',
    },
    {
        id: 30,
        name: 'Karthus',
        squarePortraitPath: '/out/30.png',
        roles: ['mage'],
        bannerUrl: '/banners/30/30000.jpg',
    },
    {
        id: 31,
        name: 'Chogath',
        squarePortraitPath: '/out/31.png',
        roles: ['tank', 'mage'],
        bannerUrl: '/banners/31/31000.jpg',
    },
    {
        id: 32,
        name: 'Amumu',
        squarePortraitPath: '/out/32.png',
        roles: ['tank', 'mage'],
        bannerUrl: '/banners/32/32000.jpg',
    },
    {
        id: 33,
        name: 'Rammus',
        squarePortraitPath: '/out/33.png',
        roles: ['tank'],
        bannerUrl: '/banners/33/33000.jpg',
    },
    {
        id: 34,
        name: 'Anivia',
        squarePortraitPath: '/out/34.png',
        roles: ['mage', 'support'],
        bannerUrl: '/banners/34/34000.jpg',
    },
    {
        id: 35,
        name: 'Shaco',
        squarePortraitPath: '/out/35.png',
        roles: ['assassin', 'fighter'],
        bannerUrl: '/banners/35/35000.jpg',
    },
    {
        id: 36,
        name: 'Dr. Mundo',
        squarePortraitPath: '/out/36.png',
        roles: ['tank', 'fighter'],
        bannerUrl: '/banners/36/36000.jpg',
    },
    {
        id: 37,
        name: 'Sona',
        squarePortraitPath: '/out/37.png',
        roles: ['support', 'mage'],
        bannerUrl: '/banners/37/37000.jpg',
    },
    {
        id: 38,
        name: 'Kassadin',
        squarePortraitPath: '/out/38.png',
        roles: ['mage', 'assassin'],
        bannerUrl: '/banners/38/38000.jpg',
    },
    {
        id: 39,
        name: 'Irelia',
        squarePortraitPath: '/out/39.png',
        roles: ['fighter', 'assassin'],
        bannerUrl: '/banners/39/39000.jpg',
    },
    {
        id: 40,
        name: 'Janna',
        squarePortraitPath: '/out/40.png',
        roles: ['support', 'mage'],
        bannerUrl: '/banners/40/40000.jpg',
    },
    {
        id: 41,
        name: 'Gangplank',
        squarePortraitPath: '/out/41.png',
        roles: ['fighter'],
        bannerUrl: '/banners/41/41000.jpg',
    },
    {
        id: 42,
        name: 'Corki',
        squarePortraitPath: '/out/42.png',
        roles: ['marksman', 'mage'],
        bannerUrl: '/banners/42/42000.jpg',
    },
    {
        id: 43,
        name: 'Karma',
        squarePortraitPath: '/out/43.png',
        roles: ['mage', 'support'],
        bannerUrl: '/banners/43/43000.jpg',
    },
    {
        id: 44,
        name: 'Taric',
        squarePortraitPath: '/out/44.png',
        roles: ['tank', 'support'],
        bannerUrl: '/banners/44/44000.jpg',
    },
    {
        id: 45,
        name: 'Veigar',
        squarePortraitPath: '/out/45.png',
        roles: ['mage'],
        bannerUrl: '/banners/45/45000.jpg',
    },
    {
        id: 48,
        name: 'Trundle',
        squarePortraitPath: '/out/48.png',
        roles: ['fighter', 'tank'],
        bannerUrl: '/banners/48/48000.jpg',
    },
    {
        id: 50,
        name: 'Swain',
        squarePortraitPath: '/out/50.png',
        roles: ['mage', 'fighter'],
        bannerUrl: '/banners/50/50000.jpg',
    },
    {
        id: 51,
        name: 'Caitlyn',
        squarePortraitPath: '/out/51.png',
        roles: ['marksman'],
        bannerUrl: '/banners/51/51000.jpg',
    },
    {
        id: 53,
        name: 'Blitzcrank',
        squarePortraitPath: '/out/53.png',
        roles: ['tank', 'fighter'],
        bannerUrl: '/banners/53/53000.jpg',
    },
    {
        id: 54,
        name: 'Malphite',
        squarePortraitPath: '/out/54.png',
        roles: ['tank', 'fighter'],
        bannerUrl: '/banners/54/54000.jpg',
    },
    {
        id: 55,
        name: 'Katarina',
        squarePortraitPath: '/out/55.png',
        roles: ['assassin', 'mage'],
        bannerUrl: '/banners/55/55000.jpg',
    },
    {
        id: 56,
        name: 'Nocturne',
        squarePortraitPath: '/out/56.png',
        roles: ['assassin', 'fighter'],
        bannerUrl: '/banners/56/56000.jpg',
    },
    {
        id: 57,
        name: 'Maokai',
        squarePortraitPath: '/out/57.png',
        roles: ['tank', 'mage'],
        bannerUrl: '/banners/57/57000.jpg',
    },
    {
        id: 58,
        name: 'Renekton',
        squarePortraitPath: '/out/58.png',
        roles: ['fighter', 'tank'],
        bannerUrl: '/banners/58/58000.jpg',
    },
    {
        id: 59,
        name: 'Jarvan IV',
        squarePortraitPath: '/out/59.png',
        roles: ['fighter', 'tank'],
        bannerUrl: '/banners/59/59000.jpg',
    },
    {
        id: 60,
        name: 'Elise',
        squarePortraitPath: '/out/60.png',
        roles: ['mage', 'fighter'],
        bannerUrl: '/banners/60/60000.jpg',
    },
    {
        id: 61,
        name: 'Orianna',
        squarePortraitPath: '/out/61.png',
        roles: ['mage', 'support'],
        bannerUrl: '/banners/61/61000.jpg',
    },
    {
        id: 62,
        name: 'Wukong',
        squarePortraitPath: '/out/62.png',
        roles: ['fighter', 'tank'],
        bannerUrl: '/banners/62/62000.jpg',
    },
    {
        id: 63,
        name: 'Brand',
        squarePortraitPath: '/out/63.png',
        roles: ['mage'],
        bannerUrl: '/banners/63/63000.jpg',
    },
    {
        id: 64,
        name: 'Lee Sin',
        squarePortraitPath: '/out/64.png',
        roles: ['fighter', 'assassin'],
        bannerUrl: '/banners/64/64000.jpg',
    },
    {
        id: 67,
        name: 'Vayne',
        squarePortraitPath: '/out/67.png',
        roles: ['marksman', 'assassin'],
        bannerUrl: '/banners/67/67000.jpg',
    },
    {
        id: 68,
        name: 'Rumble',
        squarePortraitPath: '/out/68.png',
        roles: ['mage', 'fighter'],
        bannerUrl: '/banners/68/68000.jpg',
    },
    {
        id: 69,
        name: 'Cassiopeia',
        squarePortraitPath: '/out/69.png',
        roles: ['mage', 'support'],
        bannerUrl: '/banners/69/69000.jpg',
    },
    {
        id: 72,
        name: 'Skarner',
        squarePortraitPath: '/out/72.png',
        roles: ['fighter', 'tank'],
        bannerUrl: '/banners/72/72000.jpg',
    },
    {
        id: 74,
        name: 'Heimerdinger',
        squarePortraitPath: '/out/74.png',
        roles: ['mage', 'support'],
        bannerUrl: '/banners/74/74000.jpg',
    },
    {
        id: 75,
        name: 'Nasus',
        squarePortraitPath: '/out/75.png',
        roles: ['fighter', 'tank'],
        bannerUrl: '/banners/75/75000.jpg',
    },
    {
        id: 76,
        name: 'Garen',
        squarePortraitPath: '/out/76.png',
        roles: ['fighter', 'tank'],
        bannerUrl: '/banners/76/76000.jpg',
    },
    {
        id: 77,
        name: 'Udyr',
        squarePortraitPath: '/out/77.png',
        roles: ['fighter', 'tank'],
        bannerUrl: '/banners/77/77000.jpg',
    },
    {
        id: 78,
        name: 'Poppy',
        squarePortraitPath: '/out/78.png',
        roles: ['fighter', 'tank'],
        bannerUrl: '/banners/78/78000.jpg',
    },
    {
        id: 79,
        name: 'Pantheon',
        squarePortraitPath: '/out/79.png',
        roles: ['fighter', 'assassin'],
        bannerUrl: '/banners/79/79000.jpg',
    },
    {
        id: 80,
        name: 'Ezreal',
        squarePortraitPath: '/out/80.png',
        roles: ['marksman', 'mage'],
        bannerUrl: '/banners/80/80000.jpg',
    },
    {
        id: 81,
        name: 'Mordekaiser',
        squarePortraitPath: '/out/81.png',
        roles: ['fighter'],
        bannerUrl: '/banners/81/81000.jpg',
    },
    {
        id: 82,
        name: 'Yorick',
        squarePortraitPath: '/out/82.png',
        roles: ['fighter', 'mage'],
        bannerUrl: '/banners/82/82000.jpg',
    },
    {
        id: 83,
        name: 'Akali',
        squarePortraitPath: '/out/83.png',
        roles: ['assassin', 'fighter'],
        bannerUrl: '/banners/83/83000.jpg',
    },
    {
        id: 84,
        name: 'Ivern',
        squarePortraitPath: '/out/84.png',
        roles: ['support', 'mage'],
        bannerUrl: '/banners/84/84000.jpg',
    },
    {
        id: 85,
        name: 'Aurelion Sol',
        squarePortraitPath: '/out/85.png',
        roles: ['mage'],
        bannerUrl: '/banners/85/85000.jpg',
    },
    {
        id: 86,
        name: 'Kayn',
        squarePortraitPath: '/out/86.png',
        roles: ['fighter', 'assassin'],
        bannerUrl: '/banners/86/86000.jpg',
    },
    {
        id: 89,
        name: 'Leona',
        squarePortraitPath: '/out/89.png',
        roles: ['tank', 'support'],
        bannerUrl: '/banners/89/89000.jpg',
    },
    {
        id: 90,
        name: 'Rakan',
        squarePortraitPath: '/out/90.png',
        roles: ['support', 'fighter'],
        bannerUrl: '/banners/90/90000.jpg',
    },
    {
        id: 91,
        name: 'Taliyah',
        squarePortraitPath: '/out/91.png',
        roles: ['mage', 'support'],
        bannerUrl: '/banners/91/91000.jpg',
    },
    {
        id: 92,
        name: 'Kayle',
        squarePortraitPath: '/out/92.png',
        roles: ['fighter', 'marksman'],
        bannerUrl: '/banners/92/92000.jpg',
    },
    {
        id: 96,
        name: 'Gnar',
        squarePortraitPath: '/out/96.png',
        roles: ['fighter', 'tank'],
        bannerUrl: '/banners/96/96000.jpg',
    },
    {
        id: 98,
        name: 'Shen',
        squarePortraitPath: '/out/98.png',
        roles: ['tank', 'support'],
        bannerUrl: '/banners/98/98000.jpg',
    },
    {
        id: 99,
        name: 'Lux',
        squarePortraitPath: '/out/99.png',
        roles: ['mage', 'support'],
        bannerUrl: '/banners/99/99000.jpg',
    },
    {
        id: 101,
        name: 'Xerath',
        squarePortraitPath: '/out/101.png',
        roles: ['mage', 'support'],
        bannerUrl: '/banners/101/101000.jpg',
    },
    {
        id: 102,
        name: 'Shyvana',
        squarePortraitPath: '/out/102.png',
        roles: ['fighter', 'tank'],
        bannerUrl: '/banners/102/102000.jpg',
    },
    {
        id: 103,
        name: 'Ahri',
        squarePortraitPath: '/out/103.png',
        roles: ['mage', 'assassin'],
        bannerUrl: '/banners/103/103000.jpg',
    },
    {
        id: 104,
        name: 'Graves',
        squarePortraitPath: '/out/104.png',
        roles: ['marksman'],
        bannerUrl: '/banners/104/104000.jpg',
    },
    {
        id: 105,
        name: 'Fizz',
        squarePortraitPath: '/out/105.png',
        roles: ['assassin', 'fighter'],
        bannerUrl: '/banners/105/105000.jpg',
    },
    {
        id: 106,
        name: 'Volibear',
        squarePortraitPath: '/out/106.png',
        roles: ['tank', 'fighter'],
        bannerUrl: '/banners/106/106000.jpg',
    },
    {
        id: 107,
        name: 'Rengar',
        squarePortraitPath: '/out/107.png',
        roles: ['assassin', 'fighter'],
        bannerUrl: '/banners/107/107000.jpg',
    },
    {
        id: 110,
        name: 'Varus',
        squarePortraitPath: '/out/110.png',
        roles: ['marksman', 'mage'],
        bannerUrl: '/banners/110/110000.jpg',
    },
    {
        id: 111,
        name: 'Nautilus',
        squarePortraitPath: '/out/111.png',
        roles: ['tank', 'support'],
        bannerUrl: '/banners/111/111000.jpg',
    },
    {
        id: 112,
        name: 'Vi',
        squarePortraitPath: '/out/112.png',
        roles: ['fighter', 'assassin'],
        bannerUrl: '/banners/112/112000.jpg',
    },
    {
        id: 113,
        name: 'Bard',
        squarePortraitPath: '/out/113.png',
        roles: ['support', 'mage'],
        bannerUrl: '/banners/113/113000.jpg',
    },
    {
        id: 114,
        name: 'Velkoz',
        squarePortraitPath: '/out/114.png',
        roles: ['mage', 'support'],
        bannerUrl: '/banners/114/114000.jpg',
    },
    {
        id: 115,
        name: 'Tahm Kench',
        squarePortraitPath: '/out/115.png',
        roles: ['tank', 'support'],
        bannerUrl: '/banners/115/115000.jpg',
    },
    {
        id: 117,
        name: 'Lulu',
        squarePortraitPath: '/out/117.png',
        roles: ['support', 'mage'],
        bannerUrl: '/banners/117/117000.jpg',
    },
    {
        id: 119,
        name: 'Draven',
        squarePortraitPath: '/out/119.png',
        roles: ['marksman'],
        bannerUrl: '/banners/119/119000.jpg',
    },
    {
        id: 120,
        name: 'Zac',
        squarePortraitPath: '/out/120.png',
        roles: ['tank', 'fighter'],
        bannerUrl: '/banners/120/120000.jpg',
    },
    {
        id: 121,
        name: 'Lucian',
        squarePortraitPath: '/out/121.png',
        roles: ['marksman', 'assassin'],
        bannerUrl: '/banners/121/121000.jpg',
    },
    {
        id: 122,
        name: 'Zed',
        squarePortraitPath: '/out/122.png',
        roles: ['assassin', 'fighter'],
        bannerUrl: '/banners/122/122000.jpg',
    },
    {
        id: 126,
        name: 'Jayce',
        squarePortraitPath: '/out/126.png',
        roles: ['fighter', 'marksman'],
        bannerUrl: '/banners/126/126000.jpg',
    },
    {
        id: 127,
        name: 'Kalista',
        squarePortraitPath: '/out/127.png',
        roles: ['marksman'],
        bannerUrl: '/banners/127/127000.jpg',
    },
    {
        id: 131,
        name: 'Diana',
        squarePortraitPath: '/out/131.png',
        roles: ['fighter', 'mage'],
        bannerUrl: '/banners/131/131000.jpg',
    },
    {
        id: 133,
        name: 'Quinn',
        squarePortraitPath: '/out/133.png',
        roles: ['marksman', 'fighter'],
        bannerUrl: '/banners/133/133000.jpg',
    },
    {
        id: 134,
        name: 'Syndra',
        squarePortraitPath: '/out/134.png',
        roles: ['mage'],
        bannerUrl: '/banners/134/134000.jpg',
    },
    {
        id: 136,
        name: 'Aurelion Sol',
        squarePortraitPath: '/out/136.png',
        roles: ['mage'],
        bannerUrl: '/banners/136/136000.jpg',
    },
    {
        id: 141,
        name: 'Kayn',
        squarePortraitPath: '/out/141.png',
        roles: ['fighter', 'assassin'],
        bannerUrl: '/banners/141/141000.jpg',
    },
    {
        id: 142,
        name: 'Zoe',
        squarePortraitPath: '/out/142.png',
        roles: ['mage'],
        bannerUrl: '/banners/142/142000.jpg',
    },
    {
        id: 143,
        name: 'Zyra',
        squarePortraitPath: '/out/143.png',
        roles: ['mage', 'support'],
        bannerUrl: '/banners/143/143000.jpg',
    },
    {
        id: 145,
        name: "Kai'Sa",
        squarePortraitPath: '/out/145.png',
        roles: ['marksman', 'assassin'],
        bannerUrl: '/banners/145/145000.jpg',
    },
    {
        id: 150,
        name: 'Gnar',
        squarePortraitPath: '/out/150.png',
        roles: ['fighter', 'tank'],
        bannerUrl: '/banners/150/150000.jpg',
    },
    {
        id: 154,
        name: 'Zac',
        squarePortraitPath: '/out/154.png',
        roles: ['tank', 'fighter'],
        bannerUrl: '/banners/154/154000.jpg',
    },
    {
        id: 157,
        name: 'Yasuo',
        squarePortraitPath: '/out/157.png',
        roles: ['fighter', 'assassin'],
        bannerUrl: '/banners/157/157000.jpg',
    },
    {
        id: 161,
        name: "Vel'Koz",
        squarePortraitPath: '/out/161.png',
        roles: ['mage', 'support'],
        bannerUrl: '/banners/161/161000.jpg',
    },
    {
        id: 163,
        name: 'Taliyah',
        squarePortraitPath: '/out/163.png',
        roles: ['mage', 'support'],
        bannerUrl: '/banners/163/163000.jpg',
    },
    {
        id: 164,
        name: 'Camille',
        squarePortraitPath: '/out/164.png',
        roles: ['fighter', 'tank'],
        bannerUrl: '/banners/164/164000.jpg',
    },
    {
        id: 201,
        name: 'Braum',
        squarePortraitPath: '/out/201.png',
        roles: ['tank', 'support'],
        bannerUrl: '/banners/201/201000.jpg',
    },
    {
        id: 202,
        name: 'Jhin',
        squarePortraitPath: '/out/202.png',
        roles: ['marksman', 'mage'],
        bannerUrl: '/banners/202/202000.jpg',
    },
    {
        id: 203,
        name: 'Kindred',
        squarePortraitPath: '/out/203.png',
        roles: ['marksman', 'assassin'],
        bannerUrl: '/banners/203/203000.jpg',
    },
    {
        id: 222,
        name: 'Jinx',
        squarePortraitPath: '/out/222.png',
        roles: ['marksman'],
        bannerUrl: '/banners/222/222000.jpg',
    },
    {
        id: 223,
        name: 'Tahm Kench',
        squarePortraitPath: '/out/223.png',
        roles: ['tank', 'support'],
        bannerUrl: '/banners/223/223000.jpg',
    },
    {
        id: 235,
        name: 'Senna',
        squarePortraitPath: '/out/235.png',
        roles: ['marksman', 'support'],
        bannerUrl: '/banners/235/235000.jpg',
    },
    {
        id: 236,
        name: 'Lucian',
        squarePortraitPath: '/out/236.png',
        roles: ['marksman'],
        bannerUrl: '/banners/236/236000.jpg',
    },
    {
        id: 238,
        name: 'Zed',
        squarePortraitPath: '/out/238.png',
        roles: ['assassin', 'marksman'],
        bannerUrl: '/banners/238/238000.jpg',
    },
    {
        id: 240,
        name: 'Kled',
        squarePortraitPath: '/out/240.png',
        roles: ['fighter', 'tank'],
        bannerUrl: '/banners/240/240000.jpg',
    },
    {
        id: 245,
        name: 'Ekko',
        squarePortraitPath: '/out/245.png',
        roles: ['mage', 'assassin'],
        bannerUrl: '/banners/245/245000.jpg',
    },
    {
        id: 246,
        name: 'Qiyana',
        squarePortraitPath: '/out/246.png',
        roles: ['fighter', 'assassin'],
        bannerUrl: '/banners/246/246000.jpg',
    },
    {
        id: 254,
        name: 'Vi',
        squarePortraitPath: '/out/254.png',
        roles: ['fighter', 'assassin'],
        bannerUrl: '/banners/254/254000.jpg',
    },
    {
        id: 266,
        name: 'Aatrox',
        squarePortraitPath: '/out/266.png',
        roles: ['fighter', 'tank'],
        bannerUrl: '/banners/266/266000.jpg',
    },
    {
        id: 267,
        name: 'Nami',
        squarePortraitPath: '/out/267.png',
        roles: ['support', 'mage'],
        bannerUrl: '/banners/267/267000.jpg',
    },
    {
        id: 268,
        name: 'Azir',
        squarePortraitPath: '/out/268.png',
        roles: ['mage', 'marksman'],
        bannerUrl: '/banners/268/268000.jpg',
    },
    {
        id: 350,
        name: 'Yuumi',
        squarePortraitPath: '/out/350.png',
        roles: ['support', 'mage'],
        bannerUrl: '/banners/350/350000.jpg',
    },
    {
        id: 412,
        name: 'Thresh',
        squarePortraitPath: '/out/412.png',
        roles: ['support', 'fighter'],
        bannerUrl: '/banners/412/412000.jpg',
    },
    {
        id: 420,
        name: 'Illaoi',
        squarePortraitPath: '/out/420.png',
        roles: ['fighter', 'tank'],
        bannerUrl: '/banners/420/420000.jpg',
    },
    {
        id: 421,
        name: 'RekSai',
        squarePortraitPath: '/out/421.png',
        roles: ['fighter', 'assassin'],
        bannerUrl: '/banners/421/421000.jpg',
    },
    {
        id: 427,
        name: 'Ivern',
        squarePortraitPath: '/out/427.png',
        roles: ['support', 'mage'],
        bannerUrl: '/banners/427/427000.jpg',
    },
    {
        id: 429,
        name: 'Kalista',
        squarePortraitPath: '/out/429.png',
        roles: ['marksman'],
        bannerUrl: '/banners/429/429000.jpg',
    },
    {
        id: 432,
        name: 'Bard',
        squarePortraitPath: '/out/432.png',
        roles: ['support', 'mage'],
        bannerUrl: '/banners/432/432000.jpg',
    },
    {
        id: 497,
        name: 'Rakan',
        squarePortraitPath: '/out/497.png',
        roles: ['support', 'fighter'],
        bannerUrl: '/banners/497/497000.jpg',
    },
    {
        id: 498,
        name: 'Xayah',
        squarePortraitPath: '/out/498.png',
        roles: ['marksman'],
        bannerUrl: '/banners/498/498000.jpg',
    },
    {
        id: 516,
        name: 'Ornn',
        squarePortraitPath: '/out/516.png',
        roles: ['tank', 'fighter'],
        bannerUrl: '/banners/516/516000.jpg',
    },
    {
        id: 517,
        name: 'Sylas',
        squarePortraitPath: '/out/517.png',
        roles: ['mage', 'fighter'],
        bannerUrl: '/banners/517/517000.jpg',
    },
    {
        id: 518,
        name: 'Neeko',
        squarePortraitPath: '/out/518.png',
        roles: ['mage', 'support'],
        bannerUrl: '/banners/518/518000.jpg',
    },
    {
        id: 523,
        name: 'Aphelios',
        squarePortraitPath: '/out/523.png',
        roles: ['marksman', 'mage'],
        bannerUrl: '/banners/523/523000.jpg',
    },
    {
        id: 526,
        name: 'Rell',
        squarePortraitPath: '/out/526.png',
        roles: ['tank', 'support'],
        bannerUrl: '/banners/526/526000.jpg',
    },
    {
        id: 555,
        name: 'Pyke',
        squarePortraitPath: '/out/555.png',
        roles: ['support', 'assassin'],
        bannerUrl: '/banners/555/555000.jpg',
    },
    {
        id: 777,
        name: 'Yone',
        squarePortraitPath: '/out/777.png',
        roles: ['fighter', 'assassin'],
        bannerUrl: '/banners/777/777000.jpg',
    },
    {
        id: 875,
        name: 'Sett',
        squarePortraitPath: '/out/875.png',
        roles: ['fighter', 'tank'],
        bannerUrl: '/banners/875/875000.jpg',
    },
    {
        id: 876,
        name: 'Lillia',
        squarePortraitPath: '/out/876.png',
        roles: ['fighter', 'mage'],
        bannerUrl: '/banners/876/876000.jpg',
    },
    {
        id: 887,
        name: 'Gwen',
        squarePortraitPath: '/out/887.png',
        roles: ['fighter', 'assassin'],
        bannerUrl: '/banners/887/887000.jpg',
    },
    {
        id: 711,
        name: 'Vex',
        squarePortraitPath: '/out/711.png',
        roles: ['mage', 'marksman'],
        bannerUrl: '/banners/711/711000.jpg',
    },
];
const ListChamps = ({ onChampionClick, infos, cliquable }) => {
    const [isHovered, setIsHovered] = useState(false);
const [searchTerm, setSearchTerm] = useState('');
const [selectedRole, setSelectedRole] = useState('');

    const handleMouseEnter = (champ) => {
        const champCard = document.getElementById(`champCard_${champ.id}`);
        if (champCard) {
            const champCardRect = champCard.getBoundingClientRect();
            const nametag = document.getElementById('nametag');
            if (nametag) {
                nametag.style.top = `${champCardRect.top - 30}px`; // Positionnement du nametag juste au-dessus de la champCard
                nametag.style.left = `${champCardRect.left + champCardRect.width / 2}px`;
            }
        }
        setIsHovered(champ.name);
    };

  const handleRoleSelect = (role) => {
if (role !== selectedRole) {
    setSelectedRole(role); // Mettre à jour l'état du rôle sélectionné
} else {
setSelectedRole('');
}
  };

    const handleMouseLeave = () => {
        setIsHovered(null);
    };

    const handleChampionClick = (champion) => {
        if (!infos.disabled?.includes(champion.id)) {
            onChampionClick(champion);
        }
    };

  const filteredChampions = champDatas
      .filter((champion) => {
          // Filtrer les champions en fonction du rôle sélectionné
          if (selectedRole === '') {
              return true; // Si aucun rôle sélectionné, afficher tous les champions
          } else {
              const dataOfChamp = allInfos.find((inf) => inf.id == champion.id);
			
				if (dataOfChamp) {
					const have = dataOfChamp.positions.find((pos) => pos.name === selectedRole);
					if (have) {
						return true;
					} else {
						return false
					}
				} else {
					return false
				}

              // return have
          }
      })
      .filter((champion) =>
          champion.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return (
        <>
            <div className="flex flex-row justify-between items-center w-full">
                <div className="flex gap-8 flex-row roleIcons">
                    <Image
                        alt="top"
                        width={50}
                        height={50}
                        src={'/roles/top.webp'}
                        style={{
                            height: '100%',
                            opacity: selectedRole === 'TOP' ? 1 : 0.5,
                        }}
                        onClick={() => handleRoleSelect('TOP')}
                    />
                    <Image
                        alt="jungle"
                        width={50}
                        height={50}
                        src={'/roles/jungle.webp'}
                        style={{
                            height: '100%',
                            opacity: selectedRole === 'JUNGLE' ? 1 : 0.5,
                        }}
                        onClick={() => handleRoleSelect('JUNGLE')}
                    />
                    <Image
                        alt="mid"
                        width={50}
                        height={50}
                        src={'/roles/mid.webp'}
                        style={{
                            height: '100%',
                            opacity: selectedRole === 'MID' ? 1 : 0.5,
                        }}
                        onClick={() => handleRoleSelect('MID')}
                    />
                    <Image
                        alt="adc"
                        width={50}
                        height={50}
                        src={'/roles/adc.webp'}
                        style={{
                            height: '100%',
                            opacity: selectedRole === 'ADC' ? 1 : 0.5,
                        }}
                        onClick={() => handleRoleSelect('ADC')}
                    />
                    <Image
                        alt="support"
                        width={50}
                        height={50}
                        src={'/roles/supp.webp'}
                        style={{
                            height: '100%',
                            opacity: selectedRole === 'SUPPORT' ? 1 : 0.5,
                        }}
                        onClick={() => handleRoleSelect('SUPPORT')}
                    />
                </div>
                <input
                    type="text"
                    placeholder="Rechercher un champion..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="relative h-[93%] w-full mt-4">
                <div
                    className="flex flex-row flex-wrap gap-5 h-full overflow-auto items-start content-start justify-center">
                    {filteredChampions.map((champion) => {
                        const isDisabled = infos.disabled?.includes(
                            champion.id
                        );

                        return (
                            <div
                                key={champion.id}
                                id={`champCard_${champion.id}`}
                                className="champCard"
                                onMouseEnter={() => handleMouseEnter(champion)}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    filter: isDisabled
                                        ? 'opacity(0.3)'
                                        : 'opacity(1)',
                                }}
                                onClick={() =>
                                    cliquable && handleChampionClick(champion)
                                }>
                                <div className="imageStyling cursor-pointer">
                                    <img
                                        width={100}
                                        height={100}
                                        alt="test"
                                        style={{
                                            filter: 'none',
                                            objectFit: 'cover',
                                        }}
                                        src={champion.squarePortraitPath}
                                        alt={champion.name}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div
                className="absolute top-full left-0 nametag p-2 rounded"
                style={{ visibility: isHovered ? 'visible' : 'hidden' }}
                id="nametag">
                {isHovered}
            </div>
        </>
    );
};

export default ListChamps;
