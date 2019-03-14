import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Hints extends Component {
    renderHints = () => {
        if (this.props.currentLesson.lesson) {
            const hints = this.props.currentLesson.lesson.hints
            return (
                <div id='hints-content'>
                    <h4>{hints.title}</h4>
                    {hints.text.map(p => {
                        return (
                            <p>{p}</p>
                        )
                    })}
                    {hints.additional ? <details>
                        <summary>Additional Hints</summary>
                        <p>{hints.additional}</p>
                    </details> : null}
                    {hints.resources ? <details><summary>Additional Resources</summary> {hints.resources.map(link => {
                        return (
                            <><a href={link.href}>{link.text}</a><br />< />
                                )
                })}</details> : null }
                </div>
            )
                    } else {
            return (
                <div id='hints-content'>
                    </div>
                    )
                }
            }
    render() {
        return (
            <div id='hints'>
                        {this.renderHints()}
                        <div id='save-reset'>
                            <button id='save' className='link-button'>save</button>
                            <button id='load' className='link-button'>load</button>
                            <button id='reset' className='link-button'>reset</button>
                        </div>
                    </div>
                    )
                }
            }
            
const mapStateToProps = state => ({
                        currentLesson: state.currentLesson
                })
                
                
                export default connect(
                    mapStateToProps,
                    null
                )(Hints)
