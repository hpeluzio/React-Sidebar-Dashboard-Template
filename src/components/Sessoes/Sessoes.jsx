import React, { useEffect, useCallback, useState } from 'react'
import axios from 'axios'
// import { useSessao } from '../contexts/SessaoContext'
import { useApi } from './ApiContext'
import { useSessoes } from './SessoesContext'

function Sessoes(props) {
    // const { teste, setTestes } = useSessao()
    const { apiData } = useApi()
    const { sessoes, setSessoes } = useSessoes()

    const getData = useCallback(async () => {
        const result = (
            await axios({
                method: 'GET',
                url: 'http://127.0.0.1:8000/api/v1/sessoes/',
            })
        ).data

        setSessoes(result)
    }, [])

    return (
        <div>
            <hr />
            <br />
            <br />
            <div>apiData: {apiData.base_url} </div>
            {sessoes.map((sessao) => {
                return (
                    <div>
                        {JSON.stringify(sessao)}
                        <hr />
                        <b>{sessao.id}, </b>
                        <b>{sessao.departamento.nome}, </b>
                        <b>{sessao.sala.nome}, </b>
                        <b>{sessao.ano.ano}, </b>
                        {/* <b>{JSON.stringify(sessao.avaliacoes)}</b> */}
                        <b>
                            {sessao.avaliacoes.map((avaliacao) => {
                                return (
                                    <div>
                                        <b>{avaliacao.id}, </b>
                                        <b>
                                            Nome trabalho:{' '}
                                            {
                                                avaliacao.trabalho_identificador
                                                    .nome
                                            }
                                            ,{' '}
                                        </b>
                                    </div>
                                )
                            })}
                        </b>
                        <br />
                        <br />
                    </div>
                )
            })}
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
            <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget ligula eu lectus lobortis condimentum. Aliquam nonummy
                auctor massa. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Nulla at risus.
                Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus.
                Nam mattis, felis ut adipiscing."
            </div>
        </div>
    )
}

export default Sessoes
